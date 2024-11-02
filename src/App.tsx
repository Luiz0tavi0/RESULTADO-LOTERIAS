import Ball from './components/Ball';
import GameContainer from './components/GameContainer';
import MainSection from './components/MainContainer';
import { ThemeProvider } from './context/ThemeContext';


function App() {


  return (
    <MainSection>
      <ThemeProvider>
        <GameContainer>
          {"aqui fica os jogos"}
        </GameContainer>
      </ThemeProvider>
      <div>
        <Ball number='1' />
        <Ball number='2' />
        <Ball number='3' />
        <Ball number='4' />
      </div>

    </MainSection>
  )
}

export default App
