import { ReactNode } from "react";

import LotteryResults from "../LotteryResults";
import LotteryResultsContainerStyled from "./LotteryResultsContainer.styled";


interface LotteryResultsContainerProps {
  children: ReactNode
}

const LotteryResultsContainer = ({ children }: LotteryResultsContainerProps) => {
  return (
    <LotteryResultsContainerStyled>
      <LotteryResults>
        {children}
      </LotteryResults>
    </LotteryResultsContainerStyled>

  )
}

export default LotteryResultsContainer;