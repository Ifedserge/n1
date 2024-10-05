import React from 'react';
import { ITheme } from './Theme.type';
import './theme.css';

const Themes: React.FC<ITheme> = ({ themeSelect, selectedTheme }) => {
  const [themes, setThemes] = React.useState<string[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch(
          'https://n1partners.net.ru/api/temp/themes'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (Array.isArray(result)) {
          setThemes(result);
        } else {
          throw new Error('Invalid themes data');
        }
      } catch {
        setError('Failed to fetch themes');
      }
    };

    fetchThemes();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='themes-container'>
      <h4>SORT BY THEME</h4>
      {themes.length > 0 ? (
        <div className='theme-buttons'>
          {themes.map((theme, index) => (
            <button
              key={index}
              className={`theme-button ${selectedTheme.includes(theme) ? 'active' : ''}`}
              onClick={() => themeSelect(theme)}
            >
              {theme}
            </button>
          ))}
        </div>
      ) : (
        <div>No themes available</div>
      )}
    </div>
  );
};

export default Themes;
