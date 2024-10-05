import React, { useState, useEffect } from 'react';
import './Cards.css';
import { ICards, ICardsWithTheme } from './Cards.type';

const Cards: React.FC<ICardsWithTheme> = ({
  filters,
  selectedThemes,
  selectedProviders,
  foundCount,
}) => {
  const [data, setData] = useState<ICards[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://n1partners.net.ru/api/temp');
        if (!response.ok) {
          throw new Error('Oops');
        }
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const mathesFilters =
      item.chars.rtp.value >= filters.rtp[0] &&
      item.chars.rtp.value <= filters.rtp[1] &&
      item.chars.volatility.value >= filters.volatility[0] &&
      item.chars.volatility.value <= filters.volatility[1] &&
      item.chars.roi.value >= filters.roi[0] &&
      item.chars.roi.value <= filters.roi[1] &&
      item.chars.ev.value >= filters.ev[0] &&
      item.chars.ev.value <= filters.ev[1];

    const mathesThemes =
      selectedThemes.length > 0
        ? selectedThemes.some((theme) => item.themes.includes(theme))
        : true;

    const mathesProviders =
      selectedProviders.length > 0
        ? selectedProviders.includes(item.provider)
        : true;

    return mathesFilters && mathesThemes && mathesProviders;
  });

  useEffect(() => {
    foundCount(filteredData.length);
  }, [filteredData, foundCount]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPage = Math.ceil(filteredData.length / cardsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='cards-container'>
      <div className='cards-container__block'>
        {currentData.map((item, index) => (
          <div key={index} className='card'>
            <p className='card__provider'>{item.provider}</p>
            <div className='card__title-block'>
              <img src={item.image} alt='image' />
              <h3 className='card__title-block--text'>{item.name}</h3>
            </div>
            <div className='card__info-block'>
              <div className='card__info-block--info'>
                <div className='chars__section'>
                  <p className='green'>
                    {item.chars.rtp.value}
                    {item.chars.rtp.sign}
                  </p>
                  <p className='chars'>RTP</p>
                </div>
                <div className='chars__section'>
                  <p className='green'>
                    {item.chars.volatility.value}
                    {item.chars.volatility.sign}
                  </p>
                  <p className='chars'>Volatility</p>
                </div>
                <div className='chars__section'>
                  <p className='green'>
                    {item.chars.bonus_freq.value}
                    {item.chars.bonus_freq.sign}
                  </p>
                  <p className='chars'>Bonus Freq</p>
                </div>
              </div>
              <div className='card__info-block--info'>
                <div className='chars__section-roi'>
                  <p>ROI</p>
                  <p>
                    {item.chars.roi.value}
                    {item.chars.roi.sign}
                  </p>
                </div>
                <div className='chars__section-roi'>
                  <p>EV</p>
                  <p>
                    {item.chars.ev.value}
                    {item.chars.ev.sign}
                  </p>
                </div>
              </div>
              <div className='card__info-block--info'>
                <div className='chars__section-multiplier'>
                  <p>Multiplier FREQ</p>
                  <p>X1000 587 SPINS</p>
                </div>
              </div>
            </div>
            <button className='btn-play'>PLAY</button>
            <button className='btn-details'>DETAILS</button>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button
          className='pagination__btn'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &#60;
        </button>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='pagination__btn'
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Cards;
