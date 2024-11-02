// src/components/GameContainerStyled.ts
import styled from 'styled-components';
import { GameContainerStyledProps } from './GameContainer.types';

const GameContainerStyled = styled.div<GameContainerStyledProps>`
  position: relative;
  background-color: ${({ theme }) => theme.background};
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  overflow: hidden;
`;


export default GameContainerStyled;
