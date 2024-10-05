import React, { useState, useEffect } from 'react';
import { IProvaders } from './Providers.type';
import './providers.css';

const Providers: React.FC<IProvaders> = ({
  providerSelect,
  selectedProviders,
}) => {
  const [providers, setProviders] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch(
          'https://n1partners.net.ru/api/temp/providers'
        );
        const result = await response.json();
        setProviders(result);
      } catch {
        throw new Error('Oops');
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className='dropdown-container'>
      <div className='dropdown-header' onClick={() => setIsOpen(!isOpen)}>
        <span>Sort By Provider</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <div className='dropdown-list'>
          {providers.map((provider, index) => (
            <div key={index} className='dropdown-item'>
              <label>
                {provider}
                <input
                  className='check'
                  type='checkbox'
                  checked={selectedProviders.includes(provider)}
                  onChange={() => providerSelect(provider)}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Providers;
