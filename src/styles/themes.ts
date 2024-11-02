// src/styles/theme.ts
const themes = {
  megaSena: { name: 'MEGA-SENA', background: '#6BEFA3' },
  quina: { name: 'QUINA', background: '#8666EF' },
  lotoFacil: { name: 'LOTOFACIL', background: '#DD7AC6' },
  lotoMania: { name: 'LOTOMANIA', background: '#FFAB64' },
  timeMania: { name: 'TIMEMANIA', background: '#5AAD7D' },
  diaDeSorte: { name: 'DIA DE SORTE', background: '#BFAF83' },
};

export type GameType = keyof typeof themes;
export default themes;
