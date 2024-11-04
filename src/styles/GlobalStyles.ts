import { createGlobalStyle } from "styled-components";
// import 'reset-css/reset.css'; // Importando o reset-css

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  #root {
      display: flex;
      justify-content: center;
      align-items: center;
      /* width: 100%;
      height: 100%; */
  }
  html, body {
    font-family: 'Montserrat', sans-serif;
      /* width: 100%;
      height: 100%; */
      
  }


`;

export default GlobalStyle;
