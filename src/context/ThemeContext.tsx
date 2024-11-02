// src/context/ThemeContext.tsx
import { createContext, ReactNode, useState, useMemo, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes, { GameType } from './../styles/themes';

interface ThemeContextProps {
  themeType: GameType;
  setThemeType: (gameType: GameType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'megaSena',
  setThemeType: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeType, setThemeType] = useState<GameType>('megaSena');

  // Memoriza o tema atual para evitar recriações
  const theme = useMemo(() => themes[themeType], [themeType]);

  // Encapsula a função de mudança de tema para evitar recriações
  const handleSetThemeType = useCallback((gameType: GameType) => {
    setThemeType(gameType);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType: handleSetThemeType }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
