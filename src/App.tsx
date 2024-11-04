
import Ball from './components/Ball';
import LotteryContainer from './components/LotteryContainer';
import LotteryResultsContainer from './components/LotteryResultsContainer';
import MainSection from './components/MainContainer';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {

  return (
    <MainSection>
      <ThemeProvider>
        <LotteryContainer />
      </ThemeProvider>
      <LotteryResultsContainer>
        {
          Array.from({ length: 7 }, (_, index) => (
            <Ball key={index} number={`${index + 1}`} />
          ))
        }
      </LotteryResultsContainer>
    </MainSection>
  )
}

export default App;
