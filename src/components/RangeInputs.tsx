import React from 'react';

interface RangeInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, Math.min(max, Number(e.target.value)));
    onChange(newValue);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          className="text-sm font-bold text-gray-900 border border-gray-300 rounded-lg w-20 px-2 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          min={min}
          max={max}
          step={step}
        />
      </div>
      <div className="relative pt-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            background: `linear-gradient(to right, #0088FE ${percentage}%, #e5e7eb ${percentage}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>
            {prefix}
            {min.toLocaleString()}
            {suffix}
          </span>
          <span>
            {prefix}
            {max.toLocaleString()}
            {suffix}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
