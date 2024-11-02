//src/components/MainSection.tsx
import MainContainerStyled from './MainContainer.styled';
import { MainSectionProps } from './MainContainer.types';

const MainContainer = ({ children }: MainSectionProps) => {
  return (
    <MainContainerStyled>
      {children}
    </MainContainerStyled>
  );
};

export default MainContainer;
