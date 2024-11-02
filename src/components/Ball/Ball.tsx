import BallProps from "./Ball.types";
import BallStyled from "./Ball.styled";

const Ball = ({ number }: BallProps) => {
  return (
    <BallStyled number={number}>{number}</BallStyled>
  )

};

export default Ball;