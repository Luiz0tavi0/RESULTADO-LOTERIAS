import LogoLotteryStyled from "./LogoLottery.styled";
import { LogoLotterryProps } from "./LogoLottery.types";

const LogoLottery = ({ imagePath, size }: LogoLotterryProps) => (
  <LogoLotteryStyled>
    <image href={imagePath} width={size} height={size} />
  </LogoLotteryStyled>
);


export default LogoLottery