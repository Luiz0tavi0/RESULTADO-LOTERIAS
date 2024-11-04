// src/components/GameContainerStyled.ts
import styled from 'styled-components';
import { LotterryContainerStyledProps} from './LotteryContainer.types';

const LotterryContainerStyled = styled.div<LotterryContainerStyledProps>`
  position: relative;
  flex: 0 0 60%; /* Ocupa 60% da altura disponível */
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.background};
  


  &::after {
    background-color:yellow;
    /* overflow:hidden; */
    content: "";
    position: absolute;
    bottom:-55px ;
    /* left: 50%; */
    /* transform: translateX(-50%) ; */
    
    width: 120%;
    height: 70px;
    background-color: inherit;
    border-radius: 50%;
    z-index: 10;
    background-color: #EFEFEF;
  }
`;


export default LotterryContainerStyled ;
