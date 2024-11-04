//src/components/MainSection.tsx

import { MainSectionProps } from './MainContainer.types';
import MainContainerStyled from './MainContainer.styled';

const MainContainer = ({ children }: MainSectionProps) => {
  return (
    <MainContainerStyled id='main-container'>
      {children}
    </MainContainerStyled>
  );
};

export default MainContainer;
