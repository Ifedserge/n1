export interface IRangeSlider {
  values: [number, number];
  min: number;
  max: number;
  step: number;
  onChange: (values: [number, number]) => void;
  label: string;
}
