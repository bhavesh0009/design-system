import React from 'react';

const ProgressIndicator = ({ percentage = 0, size = 'md' }) => {
  const sizes = {
    sm: { dimension: 48, stroke: 5, fontSize: 'text-sm' },
    md: { dimension: 64, stroke: 6, fontSize: 'text-base' },
    lg: { dimension: 80, stroke: 7, fontSize: 'text-lg' },
  };

  const { dimension, stroke, fontSize } = sizes[size];
  const radius = (dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={dimension} height={dimension} className="transform -rotate-90">
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          stroke="#F5F5F5"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          stroke="#6366F1"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
      <span className={`absolute font-semibold text-neutral-black ${fontSize}`}>
        {percentage}%
      </span>
    </div>
  );
};

export default ProgressIndicator;
