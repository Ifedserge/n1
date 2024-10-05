import { useState } from 'react';
import './App.css';
import FilterSection from './components/filter/Filtersection';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  const [filters, setFilters] = useState<{
    rtp: [number, number];
    volatility: [number, number];
    maxWin: [number, number];
    roi: [number, number];
    ev: [number, number];
  }>({
    rtp: [0, 100],
    volatility: [0, 100],
    maxWin: [0, 100],
    roi: [0, 100],
    ev: [0, 100],
  });

  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [foundCount, setFoundCount] = useState(0);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedThemes((prevThemes) => {
      if (prevThemes?.includes(theme)) {
        return prevThemes.filter((t) => t !== theme);
      } else {
        return [...prevThemes, theme];
      }
    });
  };

  const handleProviderChange = (provider: string) => {
    setSelectedProvider((prevProvider) => {
      if (prevProvider?.includes(provider)) {
        return prevProvider.filter((p) => p !== provider);
      } else {
        return [...prevProvider, provider];
      }
    });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="wrapper">
      <FilterSection
        selectedThemes={selectedThemes}
        onFilterChange={handleFilterChange}
        themeSelect={handleThemeChange}
        selectedTheme={selectedThemes}
        providerSelect={handleProviderChange}
        selectedProviders={selectedProvider}
      />
      <div className="content">
        <Header
          foundCount={foundCount}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <Cards
          filters={filters}
          selectedThemes={selectedThemes}
          selectedProviders={selectedProvider}
          foundCount={setFoundCount}
        />
      </div>
    </div>
  );
}

export default App;
