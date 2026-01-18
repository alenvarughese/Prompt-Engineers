// import React from 'react';
// import { Activity, TrendingUp, Briefcase, Award, ChevronRight } from 'lucide-react';
// import { SkillRadarChart } from '../components/Charts';
// import { SKILL_DATA, RECOMMENDATIONS } from '../data/mockData';

// const DashboardView = ({ setActiveTab, isDarkMode }) => {
//   const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
//   const textMain = isDarkMode ? "text-white" : "text-gray-800";
//   const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
   
//   return (
//     <div className="space-y-6 animate-in fade-in duration-500">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {[
//           { label: "Skill Readiness", value: "68%", sub: "+4% this month", icon: Activity, color: "text-blue-600 bg-blue-50" },
//           { label: "Learning Streak", value: "12 Days", sub: "Keep it up!", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
//           { label: "Projects", value: "4 Active", sub: "2 Due this week", icon: Briefcase, color: "text-purple-600 bg-purple-50" },
//           { label: "Badges", value: "15 Earned", sub: "Latest: IoT Hero", icon: Award, color: "text-amber-600 bg-amber-50" },
//         ].map((stat, idx) => (
//           <div key={idx} className={`${cardClass} p-4 rounded-xl shadow-sm border flex items-center justify-between transition-colors duration-300`}>
//             <div>
//               <p className={`text-sm font-medium ${textSub}`}>{stat.label}</p>
//               <h3 className={`text-2xl font-bold mt-1 ${textMain}`}>{stat.value}</h3>
//               <p className="text-xs text-green-600 mt-1">{stat.sub}</p>
//             </div>
//             <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : ''} ${stat.color.split(' ')[0]}`}>
//                {/* Use background color from stat but adjust for dark mode */}
//                <stat.icon size={24} className={isDarkMode ? stat.color.split(' ')[0] : ''} />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className={`lg:col-span-2 ${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className={`text-lg font-bold ${textMain}`}>Holistic Skill Intelligence</h2>
//             <button onClick={() => setActiveTab('analysis')} className="text-blue-600 text-sm font-medium hover:underline flex items-center">
//               Full Analysis <ChevronRight size={16} />
//             </button>
//           </div>
//           <div className="flex flex-col md:flex-row items-center justify-around">
//             <div className="w-full md:w-1/2">
//               <SkillRadarChart current={SKILL_DATA.current} target={SKILL_DATA.target} isDarkMode={isDarkMode} />
//             </div>
//             <div className="w-full md:w-1/3 mt-6 md:mt-0 space-y-4">
//               <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-red-900/20 border-red-900/50' : 'bg-red-50 border-red-100'}`}>
//                 <h4 className={`font-bold text-sm mb-1 flex items-center ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}><Activity size={14} className="mr-2"/> Critical Gap</h4>
//                 <p className={`text-xs ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>Public Health & Bio-Statistics are 25% below target for your desired role.</p>
//               </div>
//               <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-blue-900/20 border-blue-900/50' : 'bg-blue-50 border-blue-100'}`}>
//                 <h4 className={`font-bold text-sm mb-1 flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}><TrendingUp size={14} className="mr-2"/> Strong Point</h4>
//                 <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>GIS Mapping skills are exceeding industry entry-level requirements.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`${cardClass} p-6 rounded-xl shadow-sm border flex flex-col h-full transition-colors duration-300`}>
//           <h2 className={`text-lg font-bold mb-4 ${textMain}`}>AI Recommended Path</h2>
//           <div className="flex-1 space-y-4 overflow-y-auto pr-1">
//             {RECOMMENDATIONS.slice(0, 3).map((rec) => (
//               <div key={rec.id} className={`p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer ${isDarkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-100 bg-gray-50/50'}`}>
//                 <div className="flex justify-between items-start mb-1">
//                   <span className={`text-[10px] font-bold px-2 py-1 rounded-full 
//                     ${rec.domain === 'Healthcare' ? (isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700') : 
//                       rec.domain === 'Urban' ? (isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700') : (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700')}`}>
//                     {rec.domain}
//                   </span>
//                   <span className="text-xs font-bold text-green-600">{rec.matchScore}% Match</span>
//                 </div>
//                 <h4 className={`text-sm font-bold leading-tight mb-1 ${textMain}`}>{rec.title}</h4>
//                 <p className={`text-xs mb-2 ${textSub}`}>{rec.provider} • {rec.duration}</p>
//                 <div className={`flex items-center text-xs font-medium px-2 py-1 rounded w-max ${isDarkMode ? 'text-purple-300 bg-purple-900/30' : 'text-purple-600 bg-purple-50'}`}>
//                   <TrendingUp size={12} className="mr-1" /> {rec.impact}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button onClick={() => setActiveTab('recommendations')} className={`w-full mt-4 py-2 text-white rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
//             View All Recommendations
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;


import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Briefcase, Award, ChevronRight } from 'lucide-react';
import { SkillRadarChart } from '../components/Charts';
import { SKILL_DATA, RECOMMENDATIONS } from '../data/mockData'; // Keep mock data as fallback
import API from '../api';

const DashboardView = ({ setActiveTab, isDarkMode }) => {
  const [loading, setLoading] = useState(true);
  
  // State for the Chart Data
  // Initialize with Dummy Data so it shows something by default
  const [realSkillData, setRealSkillData] = useState(SKILL_DATA);
  const [stats, setStats] = useState({
    readiness: "68%",
    streak: "12 Days",
    projects: "4 Active",
    badges: "15 Earned"
  });

  // Fetch latest User Data from Database
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const savedUser = JSON.parse(localStorage.getItem('skillUser'));
        if (!savedUser?._id) return;

        // Get fresh profile data
        const { data } = await API.get(`/users/${savedUser._id}`);
        
        // CHECK: Does the user have any skills saved in DB?
        const hasCustomSkills = data.skills && (
          Object.keys(data.skills.current || {}).length > 0 || 
          Object.keys(data.skills.target || {}).length > 0
        );

        if (hasCustomSkills) {
          // If yes, use the REAL database data
          setRealSkillData({
            current: data.skills.current || {},
            target: data.skills.target || {}
          });
          
          // Optional: Update stats dynamically if you add that logic later
          setStats(prev => ({
            ...prev,
            readiness: `${data.level * 10 + 20}%` // Example dynamic calculation
          }));
        } 
        // If no skills in DB, it stays as SKILL_DATA (Dummy Data)

      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-800";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
   
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Skill Readiness", value: stats.readiness, sub: "+4% this month", icon: Activity, color: "text-blue-600 bg-blue-50" },
          { label: "Learning Streak", value: stats.streak, sub: "Keep it up!", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
          { label: "Projects", value: stats.projects, sub: "2 Due this week", icon: Briefcase, color: "text-purple-600 bg-purple-50" },
          { label: "Badges", value: stats.badges, sub: "Latest: IoT Hero", icon: Award, color: "text-amber-600 bg-amber-50" },
        ].map((stat, idx) => (
          <div key={idx} className={`${cardClass} p-4 rounded-xl shadow-sm border flex items-center justify-between transition-colors duration-300`}>
            <div>
              <p className={`text-sm font-medium ${textSub}`}>{stat.label}</p>
              <h3 className={`text-2xl font-bold mt-1 ${textMain}`}>{stat.value}</h3>
              <p className="text-xs text-green-600 mt-1">{stat.sub}</p>
            </div>
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : ''} ${stat.color.split(' ')[0]}`}>
               <stat.icon size={24} className={isDarkMode ? stat.color.split(' ')[0] : ''} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Section */}
        <div className={`lg:col-span-2 ${cardClass} p-6 rounded-xl shadow-sm border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className={`text-lg font-bold ${textMain}`}>Holistic Skill Intelligence</h2>
              <p className={`text-xs ${textSub}`}>
                {loading ? "Syncing..." : "Real-time visualization of your current vs target skills"}
              </p>
            </div>
            <button onClick={() => setActiveTab('analysis')} className="text-blue-600 text-sm font-medium hover:underline flex items-center">
              Full Analysis <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="w-full md:w-1/2">
              {/* PASSING THE DYNAMIC DATA HERE */}
              <SkillRadarChart 
                current={realSkillData.current} 
                target={realSkillData.target} 
                isDarkMode={isDarkMode} 
              />
            </div>
            
            <div className="w-full md:w-1/3 mt-6 md:mt-0 space-y-4">
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-red-900/20 border-red-900/50' : 'bg-red-50 border-red-100'}`}>
                <h4 className={`font-bold text-sm mb-1 flex items-center ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}><Activity size={14} className="mr-2"/> Critical Gap</h4>
                <p className={`text-xs ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>
                   Gap detected in {Object.keys(realSkillData.target)[0] || "Advanced Skills"}. Focus on recommended projects.
                </p>
              </div>
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-blue-900/20 border-blue-900/50' : 'bg-blue-50 border-blue-100'}`}>
                <h4 className={`font-bold text-sm mb-1 flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}><TrendingUp size={14} className="mr-2"/> Strong Point</h4>
                <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  Your foundation in {Object.keys(realSkillData.current)[0] || "Basics"} is solid.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel (Static for now, or could be dynamic) */}
        <div className={`${cardClass} p-6 rounded-xl shadow-sm border flex flex-col h-full transition-colors duration-300`}>
          <h2 className={`text-lg font-bold mb-4 ${textMain}`}>AI Recommended Path</h2>
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {RECOMMENDATIONS.slice(0, 3).map((rec) => (
              <div key={rec.id} className={`p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer ${isDarkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-100 bg-gray-50/50'}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full 
                    ${rec.domain === 'Healthcare' ? (isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700') : 
                      rec.domain === 'Urban' ? (isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700') : (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700')}`}>
                    {rec.domain}
                  </span>
                  <span className="text-xs font-bold text-green-600">{rec.matchScore}% Match</span>
                </div>
                <h4 className={`text-sm font-bold leading-tight mb-1 ${textMain}`}>{rec.title}</h4>
                <p className={`text-xs mb-2 ${textSub}`}>{rec.provider} • {rec.duration}</p>
                <div className={`flex items-center text-xs font-medium px-2 py-1 rounded w-max ${isDarkMode ? 'text-purple-300 bg-purple-900/30' : 'text-purple-600 bg-purple-50'}`}>
                  <TrendingUp size={12} className="mr-1" /> {rec.impact}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setActiveTab('recommendations')} className={`w-full mt-4 py-2 text-white rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
            View All Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;