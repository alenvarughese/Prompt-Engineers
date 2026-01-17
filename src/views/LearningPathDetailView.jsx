import React from 'react';
import { HeartPulse, Sprout, MapPin, CheckCircle, PlayCircle, Lock } from 'lucide-react';
import { PATH_CONTENT } from '../data/mockData';

const LearningPathDetailView = ({ domainKey, isDarkMode }) => {
  // Mapping string keys to components
  const iconMap = {
    HeartPulse: HeartPulse,
    Sprout: Sprout,
    MapPin: MapPin
  };

  const data = PATH_CONTENT[domainKey];
  if (!data) return <div>Path not found</div>;

  const Icon = iconMap[data.icon];
  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-600";
  const headerBg = isDarkMode ? (data.darkBg || data.bg) : data.bg;
  const headerBorder = isDarkMode ? (data.darkBorder || data.border) : data.border;

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <div className={`relative overflow-hidden rounded-2xl p-8 mb-8 ${headerBg} border ${headerBorder}`}>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg shadow-sm mr-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${data.color}`}>
              <Icon size={32} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{data.title}</h1>
              <p className={`text-sm mt-1 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{data.description}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className={`flex justify-between text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>Track Progress</span>
              <span className={data.color}>{data.progress}% Completed</span>
            </div>
            <div className={`w-full rounded-full h-3 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/60'}`}>
              <div className={`h-3 rounded-full transition-all duration-1000 bg-current ${data.color}`} style={{ width: `${data.progress}%` }}></div>
            </div>
          </div>
        </div>
        <Icon className={`absolute -right-6 -bottom-6 opacity-10 ${data.color}`} size={200} />
      </div>

      <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
        <h2 className={`text-lg font-bold mb-6 ${textMain}`}>Core Curriculum</h2>
        <div className="space-y-4">
          {data.modules.map((mod, idx) => (
            <div key={idx} className={`flex items-center p-4 border rounded-lg transition-colors group ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50'}`}>
              <div className="mr-4">
                {mod.status === 'completed' ? (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-green-900/30 text-green-500' : 'bg-green-100 text-green-600'}`}>
                    <CheckCircle size={18} />
                  </div>
                ) : mod.status === 'in-progress' ? (
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900/30 text-blue-500' : 'bg-blue-100 text-blue-600'}`}>
                    <PlayCircle size={18} />
                  </div>
                ) : (
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                    <Lock size={18} />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${mod.status === 'locked' ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : textMain}`}>{mod.title}</h4>
                <span className={`text-xs px-2 py-0.5 rounded mt-1 inline-block ${isDarkMode ? 'text-gray-400 bg-gray-700' : 'text-gray-500 bg-gray-100'}`}>{mod.type}</span>
              </div>
              <div>
                {mod.status === 'in-progress' && (
                  <button className={`px-4 py-2 text-xs font-bold rounded-lg ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Continue</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetailView;