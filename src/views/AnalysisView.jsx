import React from 'react';
import { HeartPulse, Cpu, Sprout } from 'lucide-react';
import { ProgressBar } from '../components/Charts';
import { RECENT_ACTIVITY } from '../data/mockData';

const AnalysisView = ({ isDarkMode }) => {
  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
  const headingText = isDarkMode ? "text-gray-200" : "text-gray-900";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500">
      <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
        <h2 className={`text-xl font-bold mb-2 ${textMain}`}>Detailed Skill Breakdown</h2>
        <p className={`text-sm mb-6 ${textSub}`}>Comparing your academic output vs. Real-time Job Market Data (Q3 2025)</p>
        
        <div className="space-y-6">
          <div>
            <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><HeartPulse className="mr-2 text-red-500" size={16}/> Healthcare Tech</h3>
            <ProgressBar label="Bio-Statistics" value={50} colorClass="bg-red-500" isDarkMode={isDarkMode} />
            <ProgressBar label="Public Health Policies" value={45} colorClass="bg-red-500" isDarkMode={isDarkMode} />
          </div>
          
          <div>
            <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><Cpu className="mr-2 text-blue-500" size={16}/> Smart City Systems</h3>
            <ProgressBar label="IoT Architecture" value={60} colorClass="bg-blue-500" isDarkMode={isDarkMode} />
            <ProgressBar label="GIS & Spatial Analysis" value={80} colorClass="bg-blue-500" isDarkMode={isDarkMode} />
          </div>

          <div>
            <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><Sprout className="mr-2 text-green-500" size={16}/> Ag-Tech (Elective)</h3>
            <ProgressBar label="Soil Data Modeling" value={30} colorClass="bg-green-500" isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl text-white shadow-lg">
          <h3 className="text-lg font-bold mb-2 flex items-center"><Cpu className="mr-2"/> AI Insight Engine</h3>
          <p className="text-indigo-100 text-sm mb-4">
            Based on your recent performance in "Urban Planning 101", your spatial reasoning is strong. However, your data handling in "Intro to Bio-Stats" suggests a need for Python pandas reinforcement.
          </p>
          <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="text-xs font-mono text-indigo-200">SUGGESTION GENERATED:</p>
            <p className="text-sm font-semibold mt-1">Take "Python for Health Data" (Week 3-4)</p>
          </div>
        </div>

        <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
          <h3 className={`text-lg font-bold mb-4 ${textMain}`}>Recent Milestones</h3>
          <div className={`relative border-l-2 ml-3 space-y-6 pb-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            {RECENT_ACTIVITY.map((activity, idx) => (
              <div key={idx} className="ml-6 relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></span>
                <h4 className={`text-sm font-bold ${textMain}`}>{activity.action}: {activity.target}</h4>
                <p className={`text-xs ${textSub}`}>{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisView;