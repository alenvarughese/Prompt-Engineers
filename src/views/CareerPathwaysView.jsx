import React from 'react';
import { Map, Activity, CheckCircle, Lock } from 'lucide-react';
import { CAREER_ROADMAP } from '../data/mockData';

const CareerPathwaysView = ({ isDarkMode }) => {
  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
   
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className={`text-xl font-bold ${textMain}`}>Your Career Roadmap</h2>
            <p className={`text-sm ${textSub}`}>Target: <span className="font-semibold text-blue-600">Smart City Health Analyst</span></p>
          </div>
          <div className={`mt-4 md:mt-0 flex items-center text-sm font-medium px-3 py-1 rounded-full ${isDarkMode ? 'text-green-400 bg-green-900/30' : 'text-green-600 bg-green-50'}`}>
             <Map className="w-4 h-4 mr-2" /> On Track
          </div>
        </div>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          <div className="space-y-12">
            {CAREER_ROADMAP.map((step, index) => (
              <div key={index} className="relative flex items-start group">
                <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-4 z-10 transition-all duration-300
                  ${step.status === 'completed' ? (isDarkMode ? 'bg-green-900/30 border-green-700 text-green-500' : 'bg-green-100 border-green-500 text-green-600') : 
                    step.status === 'current' ? (isDarkMode ? 'bg-blue-900/30 border-blue-500 text-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]' : 'bg-blue-100 border-blue-500 text-blue-600 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]') : 
                    (isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-500' : 'bg-gray-50 border-gray-300 text-gray-400')}`}>
                  {step.status === 'completed' ? <CheckCircle size={24} /> : 
                   step.status === 'current' ? <Activity size={24} /> : 
                   <Lock size={24} />}
                </div>
                <div className={`ml-24 p-5 rounded-xl border w-full transition-all duration-300
                  ${step.status === 'current' ? (isDarkMode ? 'border-blue-700 bg-blue-900/10 shadow-md' : 'border-blue-200 bg-blue-50/30 shadow-md') : (isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-100 bg-white hover:border-gray-200')}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-lg font-bold ${step.status === 'locked' ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : textMain}`}>
                      {step.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{step.stage}</span>
                  </div>
                  <p className={`text-sm mb-4 ${step.status === 'locked' ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : textSub}`}>{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded font-medium border
                        ${step.status === 'locked' ? (isDarkMode ? 'bg-gray-800 text-gray-600 border-gray-700' : 'bg-gray-50 text-gray-400 border-gray-100') : (isDarkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-600 border-gray-200')}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathwaysView;