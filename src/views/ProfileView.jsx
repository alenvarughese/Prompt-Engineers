import React, { useState } from 'react';
import { User, Mail, Briefcase, GraduationCap, Award, Plus, Save, X } from 'lucide-react';

const ProfileView = ({ user, onUpdate, isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(user);

  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-gray-700 border-blue-500 text-white" : "bg-transparent border-blue-500 text-gray-900";

  const handleSave = () => {
    onUpdate({
      ...editForm,
      avatar: (editForm.name || "U").substring(0, 2).toUpperCase()
    });
    setIsEditing(false);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      {/* Cover Image Area */}
      <div className="h-48 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-t-2xl relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative -top-16">
        <div className="flex flex-col lg:flex-row gap-6">
             
            {/* Left Column: Identity Card */}
            <div className="w-full lg:w-1/3">
                <div className={`${cardClass} rounded-2xl shadow-md border p-6 flex flex-col items-center text-center relative z-10 transition-colors duration-300`}>
                    {/* Floating Avatar */}
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg bg-gray-900 text-white flex items-center justify-center text-4xl font-bold mb-4">
                        {user.avatar}
                    </div>
                    
                    {/* Editable Identity Info */}
                    {isEditing ? (
                        <div className="w-full space-y-3 mb-4 animate-in fade-in">
                            <input 
                              type="text" 
                              value={editForm.name}
                              onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                              className={`w-full text-center border-b-2 py-1 text-xl font-bold focus:outline-none ${inputBg}`}
                              placeholder="Full Name"
                            />
                             <input 
                              type="text" 
                              value={editForm.role}
                              onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                              className={`w-full text-center border-b-2 py-1 text-sm focus:outline-none ${inputBg}`}
                              placeholder="Role / Title"
                            />
                        </div>
                    ) : (
                        <>
                            <h2 className={`text-2xl font-bold ${textMain}`}>{user.name}</h2>
                            <p className={`${textSub} font-medium mb-4`}>{user.role}</p>
                        </>
                    )}

                    {/* Edit Actions */}
                    <div className="flex gap-2 w-full mt-2">
                        {isEditing ? (
                             <button 
                                onClick={handleSave}
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                             >
                                <Save size={18} /> Save
                             </button>
                        ) : (
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                Edit Profile
                            </button>
                        )}
                          {isEditing && (
                            <button 
                                onClick={() => { setIsEditing(false); setEditForm(user); }}
                                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                    
                    {/* Stats Grid */}
                    <div className={`grid grid-cols-2 w-full gap-4 mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                        <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                            <p className={`text-xs uppercase font-bold tracking-wider mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Level</p>
                            <p className={`text-xl font-bold ${textMain}`}>{user.level}</p>
                        </div>
                        <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                            <p className={`text-xs uppercase font-bold tracking-wider mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>XP</p>
                            <p className={`text-xl font-bold ${textMain}`}>{user.xp || '2,450'}</p>
                        </div>
                    </div>
                </div>
                
                 {/* Contact Details Card */}
                 <div className={`${cardClass} rounded-2xl shadow-sm border p-6 mt-6 transition-colors duration-300`}>
                    <h3 className={`font-bold mb-4 flex items-center ${textMain}`}>
                        <User size={18} className="mr-2 text-blue-500"/> Personal Details
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}><Mail size={18} /></div>
                            <div className="flex-1 overflow-hidden">
                                <p className={`text-xs uppercase font-semibold ${textSub}`}>Email</p>
                                <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{user.email}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600'}`}><Briefcase size={18} /></div>
                            <div className="flex-1">
                                <p className={`text-xs uppercase font-semibold ${textSub}`}>University</p>
                                {isEditing ? (
                                     <input 
                                      type="text" 
                                      value={editForm.university}
                                      onChange={(e) => setEditForm({...editForm, university: e.target.value})}
                                      className={`w-full border-b border-blue-300 py-0.5 text-sm font-medium focus:outline-none bg-transparent ${isDarkMode ? 'text-white' : ''}`}
                                    />
                                ) : (
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{user.university}</p>
                                )}
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-600'}`}><GraduationCap size={18} /></div>
                            <div className="flex-1">
                                <p className={`text-xs uppercase font-semibold ${textSub}`}>Current Semester</p>
                                {isEditing ? (
                                     <input 
                                      type="text" 
                                      value={editForm.semester}
                                      onChange={(e) => setEditForm({...editForm, semester: e.target.value})}
                                      className={`w-full border-b border-blue-300 py-0.5 text-sm font-medium focus:outline-none bg-transparent ${isDarkMode ? 'text-white' : ''}`}
                                    />
                                ) : (
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{user.semester}</p>
                                )}
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="w-full lg:w-2/3 space-y-6 pt-2 lg:pt-0">
                
                {/* About Section */}
                 <div className={`${cardClass} rounded-2xl shadow-sm border p-6 transition-colors duration-300`}>
                    <h3 className={`text-lg font-bold mb-3 flex items-center ${textMain}`}>
                        About Me
                    </h3>
                    <p className={`leading-relaxed text-sm ${textSub}`}>
                        Passionate learner dedicated to bridging the gap between <span className="font-semibold text-blue-600">{user.domains ? user.domains.join(' & ') : "Technology & Innovation"}</span>. 
                        Currently focusing on acquiring practical skills in data analytics and smart city infrastructure to contribute to sustainable urban development.
                        Always eager to collaborate on projects that involve IoT, public health data, and green technology.
                    </p>
                 </div>

                 {/* Certifications & Interests Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Certifications Card */}
                    <div className={`${cardClass} rounded-2xl shadow-sm border p-6 flex flex-col transition-colors duration-300`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className={`font-bold ${textMain}`}>Certifications</h3>
                            <button className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-blue-400 hover:bg-blue-900/30' : 'text-blue-600 hover:bg-blue-50'}`}><Plus size={18}/></button>
                        </div>
                        <div className="space-y-3 flex-1">
                             {['Google Data Analytics', 'IBM AI Foundations', 'Urban Planning Certificate'].map((cert, i) => (
                              <div key={i} className={`flex items-center p-3 border rounded-xl transition-colors cursor-default ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50'}`}>
                                <div className={`p-2 rounded-lg mr-3 shadow-sm ${isDarkMode ? 'bg-amber-900/30 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>
                                    <Award size={18} />
                                </div>
                                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{cert}</span>
                              </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Interests Card */}
                    <div className={`${cardClass} rounded-2xl shadow-sm border p-6 flex flex-col transition-colors duration-300`}>
                         <div className="flex justify-between items-center mb-4">
                            <h3 className={`font-bold ${textMain}`}>Interests</h3>
                            <button className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-blue-400 hover:bg-blue-900/30' : 'text-blue-600 hover:bg-blue-50'}`}><Plus size={18}/></button>
                        </div>
                        <div className="flex flex-wrap gap-2 content-start">
                            {['Smart Cities', 'Tele-health', 'Vertical Farming', 'Big Data', 'Sustainability', 'IoT', 'Public Policy'].map((tag, i) => (
                              <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-default 
                                ${isDarkMode 
                                  ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-700' 
                                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'}`}>
                                {tag}
                              </span>
                            ))}
                        </div>
                    </div>
                 </div>
                 
                 {/* Achievements/Badges Row */}
                 <div className={`${cardClass} rounded-2xl shadow-sm border p-6 transition-colors duration-300`}>
                    <h3 className={`font-bold mb-4 ${textMain}`}>Recent Achievements</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`flex-shrink-0 w-28 h-28 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 p-3 cursor-pointer group 
                                ${isDarkMode 
                                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                                  : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-md'}`}>
                                <div className={`p-3 rounded-full transition-transform group-hover:scale-110 
                                  ${i % 2 === 0 
                                    ? (isDarkMode ? 'bg-yellow-900/30 text-yellow-500' : 'bg-yellow-100 text-yellow-600') 
                                    : (isDarkMode ? 'bg-blue-900/30 text-blue-500' : 'bg-blue-100 text-blue-600')}`}>
                                    <Award size={24} />
                                </div>
                                <span className={`text-xs font-bold text-center leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {i % 2 === 0 ? 'Top Performer' : 'Course Complete'}
                                </span>
                                <span className="text-[10px] text-gray-400">Oct 2025</span>
                            </div>
                        ))}
                    </div>
                 </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;