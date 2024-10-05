export interface IHeader {
  foundCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}
