// import React from 'react';
// import { HeartPulse, Cpu, Sprout } from 'lucide-react';
// import { ProgressBar } from '../components/Charts';
// import { RECENT_ACTIVITY } from '../data/mockData';

// const AnalysisView = ({ isDarkMode }) => {
//   const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
//   const textMain = isDarkMode ? "text-white" : "text-gray-900";
//   const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
//   const headingText = isDarkMode ? "text-gray-200" : "text-gray-900";

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500">
//       <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
//         <h2 className={`text-xl font-bold mb-2 ${textMain}`}>Detailed Skill Breakdown</h2>
//         <p className={`text-sm mb-6 ${textSub}`}>Comparing your academic output vs. Real-time Job Market Data (Q3 2025)</p>
        
//         <div className="space-y-6">
//           <div>
//             <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><HeartPulse className="mr-2 text-red-500" size={16}/> Healthcare Tech</h3>
//             <ProgressBar label="Bio-Statistics" value={50} colorClass="bg-red-500" isDarkMode={isDarkMode} />
//             <ProgressBar label="Public Health Policies" value={45} colorClass="bg-red-500" isDarkMode={isDarkMode} />
//           </div>
          
//           <div>
//             <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><Cpu className="mr-2 text-blue-500" size={16}/> Smart City Systems</h3>
//             <ProgressBar label="IoT Architecture" value={60} colorClass="bg-blue-500" isDarkMode={isDarkMode} />
//             <ProgressBar label="GIS & Spatial Analysis" value={80} colorClass="bg-blue-500" isDarkMode={isDarkMode} />
//           </div>

//           <div>
//             <h3 className={`text-sm font-bold mb-3 flex items-center ${headingText}`}><Sprout className="mr-2 text-green-500" size={16}/> Ag-Tech (Elective)</h3>
//             <ProgressBar label="Soil Data Modeling" value={30} colorClass="bg-green-500" isDarkMode={isDarkMode} />
//           </div>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl text-white shadow-lg">
//           <h3 className="text-lg font-bold mb-2 flex items-center"><Cpu className="mr-2"/> AI Insight Engine</h3>
//           <p className="text-indigo-100 text-sm mb-4">
//             Based on your recent performance in "Urban Planning 101", your spatial reasoning is strong. However, your data handling in "Intro to Bio-Stats" suggests a need for Python pandas reinforcement.
//           </p>
//           <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
//             <p className="text-xs font-mono text-indigo-200">SUGGESTION GENERATED:</p>
//             <p className="text-sm font-semibold mt-1">Take "Python for Health Data" (Week 3-4)</p>
//           </div>
//         </div>

//         <div className={`${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
//           <h3 className={`text-lg font-bold mb-4 ${textMain}`}>Recent Milestones</h3>
//           <div className={`relative border-l-2 ml-3 space-y-6 pb-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
//             {RECENT_ACTIVITY.map((activity, idx) => (
//               <div key={idx} className="ml-6 relative">
//                 <span className="absolute -left-[31px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></span>
//                 <h4 className={`text-sm font-bold ${textMain}`}>{activity.action}: {activity.target}</h4>
//                 <p className={`text-xs ${textSub}`}>{activity.time}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalysisView;


import React, { useState, useEffect } from 'react';
import { HeartPulse, Cpu, Sprout, TrendingUp, Activity } from 'lucide-react';
import API from '../api';

const AnalysisView = ({ isDarkMode }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch latest user data to get exam results
    const fetchUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem('skillUser'));
      if (storedUser?._id) {
         const { data } = await API.get(`/users/${storedUser._id}`);
         setUserData(data);
      }
    };
    fetchUser();
  }, []);

  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";

  // Helper for color logic (Same as requested)
  const getProgressColor = (val) => {
    if (val <= 20) return "bg-red-500";
    if (val <= 50) return "bg-yellow-400";
    if (val <= 80) return "bg-green-500";
    return "bg-blue-500";
  };

  const ProgressBar = ({ label, value }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</span>
        <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{Math.round(value)}%</span>
      </div>
      <div className={`w-full rounded-full h-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
            className={`h-3 rounded-full transition-all duration-1000 ${getProgressColor(value)}`} 
            style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="animate-in slide-in-from-right-4 duration-500 space-y-6">
      
      {/* Existing Analysis Content (Static or Dynamic) */}
      <div className={`${cardClass} p-6 rounded-xl shadow-sm border`}>
        <h2 className={`text-xl font-bold mb-4 ${textMain}`}>Skill Breakdown (General)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <h3 className="flex items-center font-bold mb-3 text-red-500"><HeartPulse className="mr-2"/> Healthcare</h3>
               <ProgressBar label="Bio-Statistics" value={50} />
               <ProgressBar label="Public Health" value={45} />
            </div>
            <div>
              <h3 className={`text-sm font-bold mb-3 flex items-center`}><Cpu className="mr-2 text-blue-500" size={16}/> Smart City Systems</h3>
               <ProgressBar label="IoT Architecture" value={60}  isDarkMode={isDarkMode} />
               <ProgressBar label="GIS & Spatial Analysis" value={80}  isDarkMode={isDarkMode} />
            </div>
            <div>
               <h3 className="flex items-center font-bold mb-3 text-blue-500"><Cpu className="mr-2"/> Urban Tech</h3>
                <ProgressBar label="Soil Data Modeling" value={30} isDarkMode={isDarkMode} />
               
            </div>
        </div>
      </div>

      {/* NEW: Exam Results Section */}
      <div className={`${cardClass} p-6 rounded-xl shadow-sm border`}>
        <div className="flex items-center mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-lg mr-3">
                <TrendingUp size={24} />
            </div>
            <div>
                <h2 className={`text-xl font-bold ${textMain}`}>Course Exam Performance</h2>
                <p className={`text-sm ${textSub}`}>Results from your completed "Start Now" exams</p>
            </div>
        </div>

        {!userData?.completedCourses?.length ? (
            <div className={`text-center py-8 ${textSub} border-2 border-dashed rounded-xl ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                You haven't completed any exams yet. Go to Recommendations and click "Start Now"!
            </div>
        ) : (
            <div className="space-y-6">
                {userData.completedCourses.map((course, idx) => (
                    <div key={idx} className="animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: `${idx * 100}ms` }}>
                        <ProgressBar label={course.title} value={course.score} />
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisView;