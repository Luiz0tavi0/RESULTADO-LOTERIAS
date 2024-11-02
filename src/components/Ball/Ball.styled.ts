import styled from "styled-components";
import BallProps from "./Ball.types";


const BallStyled = styled.span<BallProps>`
  display: block;
  text-align: center;
  border-radius: 50%;
  background-color: red;
  width: 76px;
  height: 76px;
  line-height: 76px;
  font-size: 24px;
  font-weight: bold;

  
  @media screen and (min-width: 768px) {
    width: 107px;
    height: 107px;
    line-height:107px;
    font-size: 33px;
    /* background-color:green; */
  }
`;

export default BallStyled;