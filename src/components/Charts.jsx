import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';

export const SkillRadarChart = ({ current, target, isDarkMode }) => {
  const data = Object.keys(current).map(key => ({
    subject: key,
    A: current[key],
    B: target[key],
    fullMark: 100
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 11, fontWeight: 500 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          
          <Radar
            name="You"
            dataKey="A"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="#3b82f6"
            fillOpacity={0.4}
          />
          <Radar
            name="Industry Target"
            dataKey="B"
            stroke="#10b981"
            strokeWidth={2}
            fill="#10b981"
            fillOpacity={0.1}
            strokeDasharray="4 4"
          />
          <Tooltip 
             contentStyle={{ 
               backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
               borderRadius: '12px', 
               border: isDarkMode ? '1px solid #374151' : 'none', 
               boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
               padding: '12px',
               color: isDarkMode ? '#fff' : '#000'
             }}
             itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
             cursor={{ stroke: isDarkMode ? '#4b5563' : '#6b7280', strokeWidth: 1 }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} 
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ProgressBar = ({ label, value, colorClass = "bg-blue-500", isDarkMode }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</span>
      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{value}%</span>
    </div>
    <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div className={`${colorClass} h-2 rounded-full transition-all duration-500`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);