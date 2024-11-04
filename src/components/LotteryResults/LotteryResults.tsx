import LotteryResultsStyled from "./LotteryResults.styled";
import LotteryResultsProps from "./LotteryResults.types";


const LotteryResults = ({ children }: LotteryResultsProps) => {
  return (
    <LotteryResultsStyled>
      {children}
    </LotteryResultsStyled>)
}
export default LotteryResults;