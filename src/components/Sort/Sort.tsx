import { useState } from 'react';

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropdown-container'>
      <div className='dropdown-header' onClick={() => setIsOpen(!isOpen)}>
        <span>Slot by Multiplier frequency</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <div className='dropdown-list'>
          <div className='dropdown-item'>
            <label>
              1000
              <input className='check' type='checkbox' />
            </label>
          </div>
          <div className='dropdown-item'>
            <label>
              10000
              <input className='check' type='checkbox' />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
