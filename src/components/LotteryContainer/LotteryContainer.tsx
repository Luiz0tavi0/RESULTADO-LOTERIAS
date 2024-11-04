// src/components/MainSection.tsx
import LotterryContainerStyled from './LotteryContainer.styled';

import SelectLottery from '../SelectLottery/SelectLottery';
import LogoLottery from '../LogoLottery';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import styled from 'styled-components';
import themes from '../../styles/themes';

const LoterryIdentifier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 50px 0px;
  
`

const NameLotterryStyled = styled.p`
  font-size: 20px;
  text-transform:uppercase;
  color: #FFF;
  font-weight: bold;
`

const DrawNumberStyled = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0,0,0,.25);
  /* margin: 0px 0px 40px 0px; */

`

const MainContainer = () => {
  const { themeType } = useContext(ThemeContext)

  return (
    <LotterryContainerStyled>
      <SelectLottery />
      <LoterryIdentifier>
        <LogoLottery imagePath="./src/components/assets/Logo_Loteria.svg" size={64} />
        <NameLotterryStyled>{themes[themeType].name}</NameLotterryStyled>
      </LoterryIdentifier>
      <DrawNumberStyled>CONCURSO Nº 4560</DrawNumberStyled>
    </LotterryContainerStyled>
  );
};

export default MainContainer;
