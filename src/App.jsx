// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, BookOpen, Activity, User, Briefcase, TrendingUp, Award, 
//   ChevronRight, Search, Bell, Map, CheckCircle, Lock, PlayCircle, Clock, Filter, 
//   Mail, LogOut, X, GraduationCap, Sun, Moon, HeartPulse, Sprout, MapPin 
// } from 'lucide-react';

// import AuthView from './views/AuthView';
// import DashboardView from './views/DashboardView';
// import AnalysisView from './views/AnalysisView';
// import CareerPathwaysView from './views/CareerPathwaysView';
// import RecommendationsView from './views/RecommendationsView';
// import LearningPathDetailView from './views/LearningPathDetailView';
// import ProfileView from './views/ProfileView';
// import API from './api';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   // const handleLogin = (userProfile) => {
//   //   setUser(userProfile);
//   //   setIsAuthenticated(true);
//   // };


//   const handleLogin = async (formData) => {
//     try {
//       // If it's a login (check if name is present or logic from AuthView)
//       const isSignUp = formData.name ? true : false;

//       let response;
//       if (isSignUp) {
//          response = await API.post('/auth/register', formData);
//       } else {
//          response = await API.post('/auth/login', { 
//            email: formData.email, 
//            password: formData.password 
//          });
//       }

//       // Save Token & User
//       localStorage.setItem('token', response.data.token);
//       // Ensure skills are in the format your app expects (Map or Object)
//       const userData = {
//          ...response.data,
//          // Convert backend Maps to objects if needed, or handle in view
//       };

//       setUser(userData);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Auth failed:", error.response?.data?.message);
//       alert(error.response?.data?.message || "Authentication failed");
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     setActiveTab('dashboard');
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   const renderContent = () => {
//     switch(activeTab) {
//       case 'dashboard': return <DashboardView setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
//       case 'analysis': return <AnalysisView isDarkMode={isDarkMode} />;
//       case 'pathways': return <CareerPathwaysView isDarkMode={isDarkMode} />;
//       case 'recommendations': return <RecommendationsView isDarkMode={isDarkMode} user={user} />;
//       case 'profile': return <ProfileView user={user} onUpdate={handleUpdateProfile} isDarkMode={isDarkMode} />;
//       case 'path-health': return <LearningPathDetailView domainKey="health" isDarkMode={isDarkMode} />;
//       case 'path-agri': return <LearningPathDetailView domainKey="agri" isDarkMode={isDarkMode} />;
//       case 'path-urban': return <LearningPathDetailView domainKey="urban" isDarkMode={isDarkMode} />;
//       default: return <DashboardView setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
//     }
//   };

//   const NavButton = ({ id, label, icon: Icon, colorClass = "text-gray-600" }) => (
//     <button 
//       onClick={() => { setActiveTab(id); setIsMobileMenuOpen(false); }}
//       className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 shrink-0
//         ${activeTab === id 
//           ? (isDarkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-700')
//           : (isDarkMode ? 'text-gray-400 hover:bg-gray-800' : `hover:bg-gray-50 ${colorClass}`)}`}
//     >
//       <Icon size={18} className="mr-3" /> {label}
//     </button>
//   );

//   if (!isAuthenticated) {
//     return <AuthView onLogin={handleLogin} isDarkMode={isDarkMode} />;
//   }

//   return (
//     <div className={`h-screen flex font-sans overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
//       {/* Sidebar Navigation */}
//       <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r flex flex-col transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
//         {/* Sidebar Header */}
//         <div className={`h-16 flex items-center px-6 border-b shrink-0 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
//           <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
//             <Activity className="text-white" size={18} />
//           </div>
//           <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
//             SkillIntel
//           </span>
//           <button onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden ml-auto p-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//              <X size={20} />
//            </button>
//         </div>

//         {/* Navigation List */}
//         <nav className="flex-1 overflow-y-auto p-4 scrollbar-hide">
//           <NavButton id="dashboard" label="Dashboard" icon={LayoutDashboard} />
//           <NavButton id="analysis" label="Skill Analysis" icon={Activity} />
//           <NavButton id="pathways" label="Career Pathways" icon={Map} />
//           <NavButton id="recommendations" label="Recommendations" icon={BookOpen} />
//           <NavButton id="profile" label="My Profile" icon={User} />
          
//           <div className="pt-6 pb-2 shrink-0">
//             <p className={`px-4 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Learning Paths</p>
//           </div>
          
//           <NavButton id="path-health" label="Health Tech" icon={HeartPulse} colorClass={isDarkMode ? 'text-red-400' : 'text-red-500'} />
//           <NavButton id="path-agri" label="Agri-Science" icon={Sprout} colorClass={isDarkMode ? 'text-green-400' : 'text-green-500'} />
//           <NavButton id="path-urban" label="Urban Planning" icon={MapPin} colorClass={isDarkMode ? 'text-blue-400' : 'text-blue-500'} />
//         </nav>
        
//         {/* User Footer */}
//         <div className={`p-4 border-t shrink-0 ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-white'}`}>
//            <div className="flex items-center gap-3">
//              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`} title={user.name}>
//                 {user.avatar}
//              </div>
//              <div className="flex-1 overflow-hidden">
//                <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</p>
//                <p className={`text-xs truncate ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{user.role}</p>
//              </div>
//              <button onClick={handleLogout} className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-gray-500 hover:text-red-400 hover:bg-red-900/20' : 'text-gray-400 hover:text-red-600 hover:bg-red-50'}`} title="Logout">
//                <LogOut size={16} />
//              </button>
//            </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col h-full overflow-hidden">
//         {/* Top Header */}
//         <header className={`h-16 border-b flex items-center justify-between px-6 lg:px-10 shrink-0 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
//           <div className="flex items-center md:hidden">
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               <LayoutDashboard />
//             </button>
//           </div>
          
//           <div className={`hidden md:flex items-center px-3 py-2 rounded-lg w-96 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
//             <Search size={18} className="text-gray-400 mr-2" />
//             <input 
//               type="text" 
//               placeholder="Search courses, skills, or careers..." 
//               className={`bg-transparent border-none outline-none text-sm w-full ${isDarkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-700'}`}
//             />
//           </div>

//           <div className="flex items-center gap-4">
//              {/* Theme Toggle Button */}
//              <button 
//                onClick={toggleTheme}
//                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
//                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//              >
//                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//              </button>

//              <button className={`relative p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
//                <Bell size={20} />
//                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//              </button>
//              <div className={`w-8 h-8 rounded-full md:hidden flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
//                {user.avatar}
//              </div>
//           </div>
//         </header>

//         {/* Scrollable Page Content */}
//         <div className="flex-1 overflow-y-auto p-6 lg:p-10">
//           <div className="max-w-6xl mx-auto">
//             {renderContent()}
//           </div>
//         </div>
//       </main>
      
//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { 
  Routes, Route, useNavigate, useLocation, Navigate 
} from 'react-router-dom'; // Import Router hooks
import { 
  LayoutDashboard, BookOpen, Activity, User, Briefcase, TrendingUp, Award, 
  ChevronRight, Search, Bell, Map, CheckCircle, Lock, PlayCircle, Clock, Filter, 
  Mail, LogOut, X, GraduationCap, Sun, Moon, HeartPulse, Sprout, MapPin 
} from 'lucide-react';

import AuthView from './views/AuthView';
import DashboardView from './views/DashboardView';
import AnalysisView from './views/AnalysisView';
import CareerPathwaysView from './views/CareerPathwaysView';
import RecommendationsView from './views/RecommendationsView';
import LearningPathDetailView from './views/LearningPathDetailView';
import ProfileView from './views/ProfileView';
import API from './api';

const App = () => {
  // 1. PERSIST AUTHENTICATION (Fix for redirect issue)
  // Initialize state directly from localStorage so it's available on first render
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('skillUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('skillUser');
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current URL

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Updated Login Handler
 const handleLogin = async (formData, isLoginMode) => { // Accept isLoginMode
    try {
      let response;
      
      if (isLoginMode) {
         // Explicitly call Login
         response = await API.post('/auth/login', { 
           email: formData.email, 
           password: formData.password 
         });
      } else {
         // Explicitly call Register
         // Ensure we send all necessary fields
         response = await API.post('/auth/register', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role
         });
      }

      const userData = response.data;
      
      // Save & Redirect
      localStorage.setItem('token', userData.token);
      localStorage.setItem('skillUser', JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
      navigate('/'); 
    } catch (error) {
      console.error("Auth failed:", error);
      // specific check for the "string error" you mentioned
      const msg = error.response?.data?.message || "Connection failed. Is the server running?";
      alert(msg);
    }
  };

  // Updated Logout Handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('skillUser'); // Clear persistence
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('skillUser', JSON.stringify(updatedUser)); // Update persistence
  };

  // Navigation Button Component (Updated for Router)
  const NavButton = ({ path, label, icon: Icon, colorClass = "text-gray-600" }) => {
    // Check if current path matches this button's path
    const isActive = location.pathname === path;
    
    return (
      <button 
        onClick={() => { navigate(path); setIsMobileMenuOpen(false); }}
        className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 shrink-0
          ${isActive
            ? (isDarkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-50 text-blue-700')
            : (isDarkMode ? 'text-gray-400 hover:bg-gray-800' : `hover:bg-gray-50 ${colorClass}`)}`}
      >
        <Icon size={18} className="mr-3" /> {label}
      </button>
    );
  };

  // If not authenticated, show AuthView (acting as /login)
  if (!isAuthenticated) {
    return <AuthView onLogin={handleLogin} isDarkMode={isDarkMode} />;
  }

  return (
    <div className={`h-screen flex font-sans overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r flex flex-col transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className={`h-16 flex items-center px-6 border-b shrink-0 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
            <Activity className="text-white" size={18} />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            SkillIntel
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden ml-auto p-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
             <X size={20} />
           </button>
        </div>

        {/* Updated Nav with Paths */}
        <nav className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          <NavButton path="/" label="Dashboard" icon={LayoutDashboard} />
          <NavButton path="/analysis" label="Skill Analysis" icon={Activity} />
          <NavButton path="/pathways" label="Career Pathways" icon={Map} />
          <NavButton path="/recommendations" label="Recommendations" icon={BookOpen} />
          <NavButton path="/profile" label="My Profile" icon={User} />
          
          <div className="pt-6 pb-2 shrink-0">
            <p className={`px-4 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Learning Paths</p>
          </div>
          
          <NavButton path="/path/health" label="Health Tech" icon={HeartPulse} colorClass={isDarkMode ? 'text-red-400' : 'text-red-500'} />
          <NavButton path="/path/agri" label="Agri-Science" icon={Sprout} colorClass={isDarkMode ? 'text-green-400' : 'text-green-500'} />
          <NavButton path="/path/urban" label="Urban Planning" icon={MapPin} colorClass={isDarkMode ? 'text-blue-400' : 'text-blue-500'} />
        </nav>
        
        <div className={`p-4 border-t shrink-0 ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-white'}`}>
           <div className="flex items-center gap-3">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`} title={user.name}>
                {user.avatar}
             </div>
             <div className="flex-1 overflow-hidden">
               <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</p>
               <p className={`text-xs truncate ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{user.role}</p>
             </div>
             <button onClick={handleLogout} className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-gray-500 hover:text-red-400 hover:bg-red-900/20' : 'text-gray-400 hover:text-red-600 hover:bg-red-50'}`} title="Logout">
               <LogOut size={16} />
             </button>
           </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className={`h-16 border-b flex items-center justify-between px-6 lg:px-10 shrink-0 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <LayoutDashboard />
            </button>
          </div>
          
          <div className={`hidden md:flex items-center px-3 py-2 rounded-lg w-96 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search courses, skills, or careers..." 
              className={`bg-transparent border-none outline-none text-sm w-full ${isDarkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-700'}`}
            />
          </div>

          <div className="flex items-center gap-4">
             <button 
               onClick={toggleTheme}
               className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
             >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>

             <button className={`relative p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
               <Bell size={20} />
               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
             </button>
             <div className={`w-8 h-8 rounded-full md:hidden flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
               {user.avatar}
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {/* 2. REACT ROUTER ROUTES DEFINITION */}
            <Routes>
              <Route path="/" element={<DashboardView setActiveTab={(tab) => navigate(`/${tab === 'dashboard' ? '' : tab}`)} isDarkMode={isDarkMode} />} />
              <Route path="/analysis" element={<AnalysisView isDarkMode={isDarkMode} />} />
              <Route path="/pathways" element={<CareerPathwaysView isDarkMode={isDarkMode} />} />
              <Route path="/recommendations" element={<RecommendationsView isDarkMode={isDarkMode} user={user} />} />
              <Route path="/profile" element={<ProfileView user={user} onUpdate={handleUpdateProfile} isDarkMode={isDarkMode} />} />
              
              {/* Dynamic Routes for Learning Paths */}
              <Route path="/path/health" element={<LearningPathDetailView domainKey="health" isDarkMode={isDarkMode} />} />
              <Route path="/path/agri" element={<LearningPathDetailView domainKey="agri" isDarkMode={isDarkMode} />} />
              <Route path="/path/urban" element={<LearningPathDetailView domainKey="urban" isDarkMode={isDarkMode} />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </main>
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;