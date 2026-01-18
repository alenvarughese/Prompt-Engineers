// import React, { useState } from 'react';
// import { Activity, User, Mail, Lock as LockIcon } from 'lucide-react';
// import { DEFAULT_USER_PROFILE } from '../data/mockData';

// const AuthView = ({ onLogin, isDarkMode }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'Student'
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userProfile = {
//       ...DEFAULT_USER_PROFILE,
//       name: formData.name || (formData.email ? formData.email.split('@')[0] : "User"),
//       email: formData.email,
//       role: formData.role,
//       avatar: (formData.name || formData.email || "U").substring(0, 2).toUpperCase(),
//     };
//     onLogin(formData);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
//   const textMain = isDarkMode ? "text-white" : "text-gray-900";
//   const textSub = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const inputBg = isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400";

//   return (
//     <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
//       <div className={`max-w-md w-full rounded-2xl shadow-xl overflow-hidden border transition-colors duration-300 ${cardClass}`}>
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
//           <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
//              <Activity className="text-white" size={32} />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">SkillIntel</h1>
//           <p className="text-blue-100">Holistic Academic Intelligence System</p>
//         </div>
        
//         <div className="p-8">
//           <h2 className={`text-2xl font-bold mb-6 text-center ${textMain}`}>
//             {isLogin ? 'Welcome Back' : 'Create Account'}
//           </h2>
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {!isLogin && (
//               <div className="space-y-1">
//                 <label className={`text-sm font-medium ${textSub}`}>Full Name</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 text-gray-400" size={18} />
//                   <input 
//                     type="text" 
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="John Doe"
//                     className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${inputBg}`}
//                     required={!isLogin}
//                   />
//                 </div>
//               </div>
//             )}
            
//             <div className="space-y-1">
//               <label className={`text-sm font-medium ${textSub}`}>Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
//                 <input 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="name@university.edu"
//                   className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${inputBg}`}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label className={`text-sm font-medium ${textSub}`}>Password</label>
//               <div className="relative">
//                 <LockIcon className="absolute left-3 top-3 text-gray-400" size={18} />
//                 <input 
//                   type="password" 
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${inputBg}`}
//                   required
//                 />
//               </div>
//             </div>

//             {!isLogin && (
//               <div className="space-y-1">
//                  <label className={`text-sm font-medium ${textSub}`}>Role</label>
//                  <select 
//                    name="role"
//                    value={formData.role}
//                    onChange={handleChange}
//                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${inputBg}`}
//                  >
//                    <option value="Student">Student</option>
//                    <option value="Researcher">Researcher</option>
//                    <option value="Early Career Professional">Early Career Professional</option>
//                    <option value="Educator">Educator</option>
//                  </select>
//               </div>
//             )}

//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md mt-6"
//             >
//               {isLogin ? 'Sign In' : 'Get Started'}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className={`text-sm ${textSub}`}>
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
//               <button 
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-blue-600 font-bold hover:underline"
//               >
//                 {isLogin ? 'Sign Up' : 'Log In'}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthView;

import React, { useState } from 'react';
import { Activity, User, Mail, Lock as LockIcon, AlertCircle } from 'lucide-react';
import { DEFAULT_USER_PROFILE } from '../data/mockData';

const AuthView = ({ onLogin, isDarkMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student'
  });
  
  // New state for validation errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    
    // Name validation (only for Signup)
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required";
      } else if (formData.name.length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isLogin && formData.password.length < 6) {
      // Stricter rule for signup only
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass 'isLogin' flag along with the form data
    if (validate()) {
      onLogin(formData, isLogin); // <--- CHANGED THIS LINE
    }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Styles
  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-600";
  const inputBg = isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400";
  // Dynamic border color based on error state
  const getInputBorder = (fieldName) => errors[fieldName] ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`max-w-md w-full rounded-2xl shadow-xl overflow-hidden border transition-colors duration-300 ${cardClass}`}>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
             <Activity className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SkillIntel</h1>
          <p className="text-blue-100">Holistic Academic Intelligence System</p>
        </div>
        
        <div className="p-8">
          <h2 className={`text-2xl font-bold mb-6 text-center ${textMain}`}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className={`text-sm font-medium ${textSub}`}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg outline-none transition-all ${inputBg} ${getInputBorder('name')}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>
            )}
            
            <div className="space-y-1">
              <label className={`text-sm font-medium ${textSub}`}>Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@university.edu"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg outline-none transition-all ${inputBg} ${getInputBorder('email')}`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle size={12} className="mr-1" /> {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className={`text-sm font-medium ${textSub}`}>Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg outline-none transition-all ${inputBg} ${getInputBorder('password')}`}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle size={12} className="mr-1" /> {errors.password}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="space-y-1">
                 <label className={`text-sm font-medium ${textSub}`}>Role</label>
                 <select 
                   name="role"
                   value={formData.role}
                   onChange={handleChange}
                   className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${inputBg}`}
                 >
                   <option value="Student">Student</option>
                   <option value="Researcher">Researcher</option>
                   <option value="Early Career Professional">Early Career Professional</option>
                   <option value="Educator">Educator</option>
                 </select>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md mt-6"
            >
              {isLogin ? 'Sign In' : 'Get Started'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={`text-sm ${textSub}`}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({}); // Clear errors when switching modes
                  setFormData({ name: '', email: '', password: '', role: 'Student' });
                }}
                className="text-blue-600 font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthView;