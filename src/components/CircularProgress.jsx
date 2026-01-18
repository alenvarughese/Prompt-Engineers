import React from 'react';

const CircularProgress = ({ percentage, size = 150, strokeWidth = 15 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine Color based on percentage (0-20 Red, 21-50 Yellow, 51-80 Green, 81+ Blue)
  let colorClass = "stroke-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]";
  if (percentage > 20) colorClass = "stroke-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]";
  if (percentage > 50) colorClass = "stroke-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]";
  if (percentage > 80) colorClass = "stroke-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]";

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background Circle */}
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress Circle with Shine Effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-out ${colorClass}`}
        />
      </svg>
      {/* Text in Middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-3xl font-bold ${colorClass.split(' ')[0].replace('stroke-', 'text-')}`}>
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;