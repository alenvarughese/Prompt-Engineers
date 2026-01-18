
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const User = require('../models/User');
// const Resource = require('../models/Resource');
// const LearningPath = require('../models/LearningPath');

// dotenv.config();

// // Fix for connection (awaiting the connection before running)
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB Connected for Seeding...');
//   } catch (error) {
//     console.error('Connection Failed:', error);
//     process.exit(1);
//   }
// };

// const seedUser = {
//   name: "Guest User",
//   email: "guest@example.com",
//   password: "password123", // Will need to register via API to login with hash
//   role: "Aspiring Professional",
//   university: "Metropolitan Tech University",
//   level: 5,
//   xp: 2450,
//   domains: ["Healthcare", "Urban Planning"],
//   skills: {
//     current: {
//       "Data Analytics": 75,
//       "IoT Systems": 60,
//       "Public Health": 45,
//       "GIS Mapping": 80
//     },
//     target: {
//       "Public Health": 75, // Gap: 30
//       "Bio-Statistics": 70 // Gap: 70 (User has 0)
//     }
//   },
//   careerRoadmap: []
// };

// // EXPANDED RESOURCE LIST
// const seedResources = [
//   // --- DEFAULT RECOMMENDATIONS (Matches User's initial gaps in Public Health & Bio-Stats) ---
//   {
//     title: "AI in Healthcare Informatics",
//     provider: "Coursera",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+15 Public Health",
//     skillsTargeted: ["Public Health", "AI", "Data Analytics"]
//   },
//   {
//     title: "Epidemiology Visualization",
//     provider: "DataCamp",
//     type: "Project",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "1 Week",
//     impact: "+12 Bio-Statistics",
//     skillsTargeted: ["Bio-Statistics", "Visualization"]
//   },
//   {
//     title: "Smart Grid Infrastructure",
//     provider: "edX / MIT",
//     type: "Course",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "6 Weeks",
//     impact: "+15 Urban Planning",
//     skillsTargeted: ["Urban Planning", "Energy Systems"]
//   },
//   {
//     title: "Urban IoT Sensor Deployment",
//     provider: "University Lab",
//     type: "Project",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "2 Months",
//     impact: "+20 IoT Systems",
//     skillsTargeted: ["IoT Systems", "Hardware", "Smart City"]
//   },
//   {
//     title: "Ethics in Medical Data",
//     provider: "FutureLearn",
//     type: "Certification",
//     domain: "Healthcare",
//     difficulty: "Beginner",
//     duration: "2 Weeks",
//     impact: "+10 Ethics",
//     skillsTargeted: ["Public Health", "Ethics", "Compliance"]
//   },

//   // --- DYNAMIC RECOMMENDATIONS (Hidden until user adds these skills) ---
//   {
//     title: "R Programming for Health Data",
//     provider: "Johns Hopkins (Coursera)",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+25 R Programming",
//     skillsTargeted: ["R Programming", "Bio-Statistics"]
//   },
//   {
//     title: "Python for Data Science Bootcamp",
//     provider: "Udemy",
//     type: "Course",
//     domain: "Tech",
//     difficulty: "Beginner",
//     duration: "8 Weeks",
//     impact: "+30 Python",
//     skillsTargeted: ["Python", "Data Analytics"]
//   },
//   {
//     title: "Sustainable Vertical Farming",
//     provider: "AgriTech Hub",
//     type: "Project",
//     domain: "Agriculture",
//     difficulty: "Intermediate",
//     duration: "3 Weeks",
//     impact: "+20 Agri-Tech",
//     skillsTargeted: ["Agriculture", "Sustainability", "IoT"]
//   },
//   {
//     title: "Advanced GIS with ArcGIS",
//     provider: "Esri Training",
//     type: "Certification",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "6 Weeks",
//     impact: "+25 GIS Mapping",
//     skillsTargeted: ["GIS Mapping", "Spatial Analysis"]
//   },
//   {
//     title: "Machine Learning for Urban Traffic",
//     provider: "Google Cloud Skills",
//     type: "Lab",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "2 Hours",
//     impact: "+10 ML",
//     skillsTargeted: ["Machine Learning", "Traffic Systems", "Urban Planning"]
//   }
// ];

// const importData = async () => {
//   await connectDB();

//   // Clear old data
//   await User.deleteMany();
//   await Resource.deleteMany();
//   await LearningPath.deleteMany();

//   // Insert new
//   await User.create(seedUser);
//   await Resource.insertMany(seedResources);
  
//   console.log('Data Imported! You have 10 resources in DB.');
//   process.exit();
// };

// importData();



// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const User = require('../models/User');
// const Resource = require('../models/Resource');
// const LearningPath = require('../models/LearningPath');

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB Connected...');
//   } catch (error) {
//     console.error('Connection Failed:', error);
//     process.exit(1);
//   }
// };

// const seedUser = {
//   name: "Guest User",
//   email: "guest@example.com",
//   password: "password123", 
//   role: "Student",
//   university: "Tech University",
//   level: 1,
//   xp: 100,
//   domains: ["Healthcare", "Urban"],
//   // START WITH NO TARGETS so we see the random cards first
//   skills: {
//     current: { "Data Analytics": 50 },
//     target: {} 
//   },
//   careerRoadmap: []
// };

// const seedResources = [
//   // --- POOL OF "RANDOM" COURSES (isDefault: true) ---
//   {
//     title: "AI in Healthcare Informatics",
//     provider: "Coursera",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+15 Public Health",
//     skillsTargeted: ["Public Health", "AI"],
//     isDefault: true 
//   },
//   {
//     title: "Urban IoT Sensor Deployment",
//     provider: "University Lab",
//     type: "Project",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "2 Months",
//     impact: "+20 IoT Systems",
//     skillsTargeted: ["IoT Systems"],
//     isDefault: true
//   },
//   {
//     title: "Precision Agriculture Models",
//     provider: "AgriTech Hub",
//     type: "Certification",
//     domain: "Agriculture",
//     difficulty: "Beginner",
//     duration: "3 Weeks",
//     impact: "+10 Data Analytics",
//     skillsTargeted: ["Agriculture"],
//     isDefault: true
//   },
//   {
//     title: "Epidemiology Visualization",
//     provider: "DataCamp",
//     type: "Project",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "1 Week",
//     impact: "+12 Bio-Statistics",
//     skillsTargeted: ["Bio-Statistics"],
//     isDefault: true
//   },
//   {
//     title: "Smart Grid Infrastructure",
//     provider: "edX",
//     type: "Course",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "6 Weeks",
//     impact: "+15 Urban Planning",
//     skillsTargeted: ["Urban Planning"],
//     isDefault: true
//   },
//   // Add more defaults if you want more variety in the "Random" selection
//   {
//     title: "Introduction to Ethics",
//     provider: "FutureLearn",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Beginner",
//     duration: "2 Weeks",
//     impact: "+5 Ethics",
//     skillsTargeted: ["Ethics"],
//     isDefault: true
//   },

//   // --- HIDDEN SPECIFIC RECOMMENDATIONS (isDefault: false) ---
//   // These ONLY show up when you search for them
//   {
//     title: "R Programming for Health Data",
//     provider: "Johns Hopkins",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+25 R Programming",
//     skillsTargeted: ["R Programming"],
//     isDefault: false
//   },
//   {
//     title: "Python Data Science Bootcamp",
//     provider: "Udemy",
//     type: "Course",
//     domain: "Tech",
//     difficulty: "Beginner",
//     duration: "8 Weeks",
//     impact: "+30 Python",
//     skillsTargeted: ["Python"],
//     isDefault: false
//   }
// ];

// const importData = async () => {
//   await connectDB();
//   await User.deleteMany();
//   await Resource.deleteMany();
//   await LearningPath.deleteMany();

//   await User.create(seedUser);
//   await Resource.insertMany(seedResources);
  
//   console.log('Data Imported. User reset to have 0 targets (Random cards will show first).');
//   process.exit();
// };

// importData();





const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Resource = require('../models/Resource');
const LearningPath = require('../models/LearningPath');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Connection Failed:', error);
    process.exit(1);
  }
};

const seedUser = {
  name: "Guest User",
  email: "guest@example.com",
  password: "password123", 
  role: "Student",
  university: "Tech University",
  level: 1,
  xp: 100,
  domains: ["Healthcare", "Urban"],
  // START WITH NO TARGETS so we see the random cards first
  skills: {
    current: { "Data Analytics": 50 },
    target: {} 
  },
  careerRoadmap: []
};

const generateQuestions = (topic) => ({
  week1: [
    { questionText: `What is the primary benefit of ${topic}?`, options: ["Efficiency", "Cost", "Speed", "All of above"], correctAnswer: 3 },
    { questionText: "Which sensor is most common?", options: ["Lidar", "Thermal", "Piezo", "Optical"], correctAnswer: 3 },
    { questionText: "Data privacy is governed by?", options: ["GDPR", "NASA", "WHO", "None"], correctAnswer: 0 }
  ],
  week2: [
    { questionText: "Deep Learning requires?", options: ["Small Data", "Big Data", "No Data", "Manual Entry"], correctAnswer: 1 },
    { questionText: "IoT stands for?", options: ["Input Output", "Internet of Things", "Intranet", "Inner Outer"], correctAnswer: 1 },
    { questionText: "Cloud computing offers?", options: ["Scalability", "Fixed Size", "Local storage", "Offline mode"], correctAnswer: 0 }
  ],
  week3: [
    { questionText: "Final integration step?", options: ["Testing", "Coding", "Design", "Planning"], correctAnswer: 0 },
    { questionText: "Latency refers to?", options: ["Delay", "Speed", "Bandwidth", "Storage"], correctAnswer: 0 },
    { questionText: "Success metric?", options: ["KPI", "ABC", "XYZ", "LMN"], correctAnswer: 0 }
  ],
  week4: {
    message: "Coming Soon (Live Course On Online)",
    link: "https://www.coursera.org"
  }
});

// const seedResources = [
//   // --- POOL OF "RANDOM" COURSES (isDefault: true) ---
//   {
//     title: "AI in Healthcare Informatics",
//     provider: "Coursera",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+15 Public Health",
//     skillsTargeted: ["Public Health", "AI"],
//     isDefault: true 
//   },
//   {
//     title: "Urban IoT Sensor Deployment",
//     provider: "University Lab",
//     type: "Project",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "2 Months",
//     impact: "+20 IoT Systems",
//     skillsTargeted: ["IoT Systems"],
//     isDefault: true
//   },
//   {
//     title: "Precision Agriculture Models",
//     provider: "AgriTech Hub",
//     type: "Certification",
//     domain: "Agriculture",
//     difficulty: "Beginner",
//     duration: "3 Weeks",
//     impact: "+10 Data Analytics",
//     skillsTargeted: ["Agriculture"],
//     isDefault: true
//   },
//   {
//     title: "Epidemiology Visualization",
//     provider: "DataCamp",
//     type: "Project",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "1 Week",
//     impact: "+12 Bio-Statistics",
//     skillsTargeted: ["Bio-Statistics"],
//     isDefault: true
//   },
//   {
//     title: "Smart Grid Infrastructure",
//     provider: "edX",
//     type: "Course",
//     domain: "Urban",
//     difficulty: "Advanced",
//     duration: "6 Weeks",
//     impact: "+15 Urban Planning",
//     skillsTargeted: ["Urban Planning"],
//     isDefault: true
//   },
//   // Add more defaults if you want more variety in the "Random" selection
//   {
//     title: "Introduction to Ethics",
//     provider: "FutureLearn",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Beginner",
//     duration: "2 Weeks",
//     impact: "+5 Ethics",
//     skillsTargeted: ["Ethics"],
//     isDefault: true
//   },

//   // --- HIDDEN SPECIFIC RECOMMENDATIONS (isDefault: false) ---
//   // These ONLY show up when you search for them
//   {
//     title: "R Programming for Health Data",
//     provider: "Johns Hopkins",
//     type: "Course",
//     domain: "Healthcare",
//     difficulty: "Intermediate",
//     duration: "4 Weeks",
//     impact: "+25 R Programming",
//     skillsTargeted: ["R Programming"],
//     isDefault: false
//   },
//   {
//     title: "Python Data Science Bootcamp",
//     provider: "Udemy",
//     type: "Course",
//     domain: "Tech",
//     difficulty: "Beginner",
//     duration: "8 Weeks",
//     impact: "+30 Python",
//     skillsTargeted: ["Python"],
//     isDefault: false
//   }
// ];


const seedResources = [
  // --- DEFAULT CARDS (Visible Initially) ---
  {
    title: "AI in Healthcare Informatics",
    provider: "Coursera via DeepLearning.ai",
    type: "Course",
    domain: "Healthcare",
    difficulty: "Intermediate",
    duration: "4 Weeks",
    impact: "+15 Public Health",
    skillsTargeted: ["Public Health", "AI"],
    isDefault: true,
    examData: generateQuestions("AI in Health")
  },
  {
    title: "Urban IoT Sensor Deployment",
    provider: "University Lab",
    type: "Project",
    domain: "Urban",
    difficulty: "Advanced",
    duration: "2 Months",
    impact: "+20 IoT Systems",
    skillsTargeted: ["IoT Systems", "Hardware"],
    isDefault: true,
    examData: generateQuestions("IoT Deployment")
  },
  {
    title: "Precision Agriculture Data Models",
    provider: "AgriTech Hub",
    type: "Certification",
    domain: "Agriculture",
    difficulty: "Beginner",
    duration: "3 Weeks",
    impact: "+10 Data Analytics",
    skillsTargeted: ["Agriculture", "Data Analytics"],
    isDefault: true,
    examData: generateQuestions("Agri Data Models")
  },
  {
    title: "Epidemiology Visualization",
    provider: "DataCamp",
    type: "Project",
    domain: "Healthcare",
    difficulty: "Intermediate",
    duration: "1 Week",
    impact: "+12 Bio-Statistics",
    skillsTargeted: ["Bio-Statistics", "Visualization"],
    isDefault: true,
    examData: generateQuestions("Epidemiology Viz")
  },
  {
    title: "Smart Grid Infrastructure",
    provider: "edX / MIT",
    type: "Course",
    domain: "Urban",
    difficulty: "Advanced",
    duration: "6 Weeks",
    impact: "+15 Urban Planning",
    skillsTargeted: ["Urban Planning", "Energy Systems"],
    isDefault: true,
    examData: generateQuestions("Smart Grids")
  },
  {
    title: "Introduction to Ethics",
    provider: "FutureLearn",
    type: "Course",
    domain: "Healthcare",
    difficulty: "Beginner",
    duration: "2 Weeks",
    impact: "+5 Ethics",
    skillsTargeted: ["Ethics"],
    isDefault: true,
    examData: generateQuestions("Medical Ethics")
  },

  // --- HIDDEN SPECIFIC RECOMMENDATIONS (Triggered by Add Skill) ---
  {
    title: "R Programming for Health Data",
    provider: "Johns Hopkins",
    type: "Course",
    domain: "Healthcare",
    difficulty: "Intermediate",
    duration: "4 Weeks",
    impact: "+25 R Programming",
    skillsTargeted: ["R Programming"],
    isDefault: false,
    examData: generateQuestions("R Programming")
  },
  {
    title: "Python Data Science Bootcamp",
    provider: "Udemy",
    type: "Course",
    domain: "Tech",
    difficulty: "Beginner",
    duration: "8 Weeks",
    impact: "+30 Python",
    skillsTargeted: ["Python"],
    isDefault: false,
    examData: generateQuestions("Python Data Science")
  }
]; 
const importData = async () => {
  await connectDB();
  await User.deleteMany();
  await Resource.deleteMany();
  await LearningPath.deleteMany();

  await User.create(seedUser);
  await Resource.insertMany(seedResources);
  
  console.log('Data Imported. User reset to have 0 targets (Random cards will show first).');
  process.exit();
};

importData();