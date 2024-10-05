import React from 'react';
import { IHeader } from './Header.type';
import searchIcon from '../../assets/search.png';
import './header.css';

const Header: React.FC<IHeader> = ({
  foundCount,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className='header__container'>
      <div className='found-container'>
        <span>Found </span>
        <span className='found-count'>{foundCount.toLocaleString()} SLOTS</span>
      </div>
      <div className='search__container'>
        <input
          type='text'
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchQuery}
          placeholder='Enter reqest'
        />
        <button className='search-btn'>
          <img src={searchIcon} alt='' />
        </button>
      </div>
      <div className='sort-container'>
        <span>Sort by populare</span>
        <span>&#9662;</span>
      </div>
    </div>
  );
};

export default Header;
