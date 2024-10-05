import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IRangeSlider } from './RangeSlider.type';
import './rangeSlider.css';

const RangeSlider: React.FC<IRangeSlider> = ({
  values,
  min,
  max,
  step,
  onChange,
  label,
}) => {
  return (
    <div className='filter-slider__block'>
      <p className='label__slider'>{`${label}`}</p>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values: number[]) => {
          if (values.length === 2) {
            onChange([values[0], values[1]]);
          }
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              margin: '0 auto',
              display: 'flex',
              width: '280px',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: values,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: min,
                  max: max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className='her'
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              backgroundColor: '#548BF4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          ></div>
        )}
      />
      <div className='persent'>
        <p>{`${values[0]}%`}</p>
        <p>{`${values[1]}%`}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
