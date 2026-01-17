import React from 'react';
import { Filter, Clock, Activity } from 'lucide-react';
import { RECOMMENDATIONS } from '../data/mockData';

const RecommendationsView = ({ isDarkMode }) => {
  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
   
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className={`text-xl font-bold ${textMain}`}>Personalized Recommendations</h2>
          <p className={`text-sm ${textSub}`}>AI-curated opportunities to bridge your skill gaps</p>
        </div>
        <button className={`flex items-center text-sm font-medium px-3 py-2 rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
          <Filter size={16} className="mr-2"/> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECOMMENDATIONS.map((rec) => (
          <div key={rec.id} className={`${cardClass} rounded-xl shadow-sm border p-5 flex flex-col hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start mb-3">
               <span className={`text-[10px] font-bold px-2 py-1 rounded-full 
                   ${rec.domain === 'Healthcare' ? (isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700') : 
                     rec.domain === 'Urban' ? (isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700') : (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700')}`}>
                   {rec.domain}
              </span>
              <span className={`text-xs px-2 py-1 rounded border font-medium
                ${rec.type === 'Project' ? (isDarkMode ? 'bg-purple-900/30 text-purple-300 border-purple-800' : 'bg-purple-50 text-purple-700 border-purple-100') : (isDarkMode ? 'bg-orange-900/30 text-orange-300 border-orange-800' : 'bg-orange-50 text-orange-700 border-orange-100')}`}>
                {rec.type}
              </span>
            </div>
            <h3 className={`text-lg font-bold mb-2 leading-tight ${textMain}`}>{rec.title}</h3>
            <p className={`text-sm mb-4 flex-1 ${textSub}`}>{rec.provider}</p>
            <div className={`flex items-center gap-4 text-xs mb-4 ${textSub}`}>
              <span className="flex items-center"><Clock size={14} className="mr-1"/> {rec.duration}</span>
              <span className="flex items-center"><Activity size={14} className="mr-1"/> {rec.difficulty}</span>
            </div>
            <div className={`pt-4 border-t mt-auto ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-medium ${textSub}`}>Skill Impact</span>
                <span className="text-xs font-bold text-green-600">{rec.impact}</span>
              </div>
              <button className={`w-full py-2 font-bold rounded-lg text-sm transition-colors ${isDarkMode ? 'bg-blue-900/40 text-blue-400 hover:bg-blue-900/60' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                Start Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsView;