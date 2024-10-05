import { getTrackBackground } from 'react-range';

export const getRangeBackground = (
  values: number[],
  min: number,
  max: number
) => {
  return getTrackBackground({
    values,
    colors: ['#ccc', '#548BF4', '#ccc'],
    min,
    max,
  });
};
