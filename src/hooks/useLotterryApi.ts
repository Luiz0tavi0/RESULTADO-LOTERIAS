import { useCallback, useEffect, useState } from "react";
import getLotteryResults from "../services/LotteryService";
import { LotteryApiResult } from "../services/services.types";

const useLotterryApi = (lotterryId: string) => {
  const [result, setResult] = useState<LotteryApiResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(`Result: ${result?.dezenas}`)
  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getLotteryResults(lotterryId);
      setResult(data)

    } catch (error: unknown) {
      if (error instanceof Error)
        setError(error.message)
      else
        setError('An unknown error occurred');

    } finally { setLoading(false) }

  }, [lotterryId]
  )
  useEffect(() => {



    fetchResults();
  }, [lotterryId])
  return { result, loading, error }
}

export default useLotterryApi;