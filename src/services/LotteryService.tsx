import apiClient from "./api/lotterryApi"
import { LotteryApiResult } from "./services.types";

const getLotteryResults = async (lotterryId: string): Promise<LotteryApiResult> => {
  const response = await apiClient.get(`${lotterryId}/latest`)
  // console.log(response)
  const { data, status } = response
  if (status !== 200)
    throw new Error('Failed to fetch lottery results');
  return {
    loteria: data.loteria,
    dezenas: data.dezenas,
    data: data.data,
  } as LotteryApiResult;

}

export default getLotteryResults;