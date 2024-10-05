export interface ICards {
  image: string;
  name: string;
  provider: string;
  chars: {
    rtp: {
      type: string;
      value: number;
      sign: string | null;
    };
    volatility: {
      type: string;
      value: number;
      sign: string | null;
    };
    bonus_freq: {
      type: string;
      value: string;
      sign: string | null;
    };
    roi: {
      type: string;
      value: number;
      sign: string | null;
    };
    ev: {
      type: string;
      value: number;
      sign: string | null;
    };
  };
  themes: string[];
}

export interface CardsProps {
  filters: {
    rtp: [number, number];
    volatility: [number, number];
    maxWin: [number, number];
    roi: [number, number];
    ev: [number, number];
  };
}

export interface ICardsWithTheme extends CardsProps {
  selectedThemes: string[];
  selectedProviders: string[];
  foundCount: (count: number) => void;
}
