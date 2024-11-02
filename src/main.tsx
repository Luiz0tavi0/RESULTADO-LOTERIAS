import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/GlobalStyles.ts';
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <StrictMode>
      <App />
    </StrictMode>
  </>,

)