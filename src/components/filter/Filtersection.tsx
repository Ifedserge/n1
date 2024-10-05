import { useState } from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';
import { IFilterProps } from './Filter.type';
import Themes from '../Theme/Theme';
import Providers from '../Providers/Providers';
import SortMult from '../SortMult/SortMult';
import SortFeature from '../SortFeature/SortFeature';
import './filter.css';

const FilterSection: React.FC<IFilterProps> = ({
  onFilterChange,
  themeSelect,
  selectedThemes,
  selectedProviders,
  providerSelect,
}) => {
  const [rtpRange, setRtpRange] = useState<[number, number]>([0, 100]);
  const [volatilityRange, setvolatilityRange] = useState<[number, number]>([
    0, 100,
  ]);
  const [maxWinRange, setMaxWinRange] = useState<[number, number]>([0, 100]);
  const [roiRange, setRoiRange] = useState<[number, number]>([0, 100]);
  const [evRange, setEvRange] = useState<[number, number]>([0, 100]);

  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  const handleFilterChange = () => {
    onFilterChange({
      rtp: rtpRange,
      volatility: volatilityRange,
      ev: evRange,
      maxWin: maxWinRange,
      roi: roiRange,
    });
  };

  return (
    <div className='filter__section'>
      <div className='filter__section-block'>
        <h4>FILTER BY</h4>
        <div className='filter__settings'>
          <div className='section__btn'>
            <button className='filter-btn active slot'>SLOT</button>
            <button className='filter-btn'>BONUSBUY</button>
          </div>
        </div>
        <div className='filter__slider'>
          <RangeSlider
            values={rtpRange}
            min={MIN}
            max={MAX}
            label='RTP'
            onChange={(values) => {
              setRtpRange(values);
              handleFilterChange();
            }}
            step={STEP}
          />
          <RangeSlider
            values={volatilityRange}
            min={MIN}
            max={MAX}
            label='Volatility'
            onChange={(values) => {
              setvolatilityRange(values);
              handleFilterChange();
            }}
            step={STEP}
          />
          <RangeSlider
            values={maxWinRange}
            min={MIN}
            max={MAX}
            label='MaxWin'
            onChange={(values) => {
              setMaxWinRange(values);
              handleFilterChange();
            }}
            step={STEP}
          />
          <RangeSlider
            values={roiRange}
            min={MIN}
            max={MAX}
            label='ROI'
            onChange={(values) => {
              setRoiRange(values);
              handleFilterChange();
            }}
            step={STEP}
          />
          <RangeSlider
            values={evRange}
            min={MIN}
            max={MAX}
            label='EV'
            onChange={(values) => {
              setEvRange(values);
              handleFilterChange();
            }}
            step={STEP}
          />
        </div>
        <Themes themeSelect={themeSelect} selectedTheme={selectedThemes} />
        <SortMult />
        <Providers
          selectedProviders={selectedProviders}
          providerSelect={providerSelect}
        />
        <SortFeature />
      </div>
    </div>
  );
};

export default FilterSection;
