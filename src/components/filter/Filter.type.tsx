import { ITheme } from '../Theme/Theme.type';
export interface IFilterProps extends ITheme {
  onFilterChange: (filters: {
    rtp: [number, number];
    volatility: [number, number];
    maxWin: [number, number];
    roi: [number, number];
    ev: [number, number];
  }) => void;
  selectedThemes: string[];
  selectedProviders: string[];
  providerSelect: (provider: string) => void;
}
