// src/components/MainSection.tsx
import GameContainerStyled from './GameContainer.styled';
import { GameContainerProps } from './GameContainer.types';
import SelectLottery from '../SelectLottery/SelectLottery';


const MainContainer = ({ children }: GameContainerProps) => {


  return (
    <GameContainerStyled>
      <SelectLottery />
      {/* <h1>Aposta do tipo: {themes[themeType].name}</h1> */}
      {children}
    </GameContainerStyled>
  );
};

export default MainContainer;
