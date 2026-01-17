export const DEFAULT_USER_PROFILE = {
  name: "Guest User",
  role: "Aspiring Professional",
  university: "Metropolitan Tech University",
  semester: "1st Semester",
  avatar: "GU",
  email: "guest@example.com",
  xp: 2450,
  level: 5,
  domains: ["Healthcare", "Urban Planning"]
};

export const SKILL_DATA = {
  current: {
    "Data Analytics": 75,
    "IoT Systems": 60,
    "Public Health": 45,
    "GIS Mapping": 80,
    "Bio-Statistics": 50,
    "Project Mgmt": 65
  },
  target: { 
    "Data Analytics": 85,
    "IoT Systems": 80,
    "Public Health": 75,
    "GIS Mapping": 70,
    "Bio-Statistics": 70,
    "Project Mgmt": 75
  }
};

export const RECOMMENDATIONS = [
  {
    id: 1,
    title: "AI in Healthcare Informatics",
    provider: "Coursera via DeepLearning.ai",
    type: "Course",
    duration: "4 Weeks",
    impact: "+15 Public Health",
    domain: "Healthcare",
    matchScore: 98,
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "Urban IoT Sensor Deployment",
    provider: "Internal University Lab",
    type: "Project",
    duration: "2 Months",
    impact: "+20 IoT Systems",
    domain: "Urban",
    matchScore: 92,
    difficulty: "Advanced"
  },
  {
    id: 3,
    title: "Precision Agriculture Data Models",
    provider: "AgriTech Hub",
    type: "Certification",
    duration: "3 Weeks",
    impact: "+10 Data Analytics",
    domain: "Agriculture",
    matchScore: 85,
    difficulty: "Beginner"
  },
  {
    id: 4,
    title: "Epidemiology Visualization",
    provider: "DataCamp",
    type: "Project",
    duration: "1 Week",
    impact: "+12 Bio-Statistics",
    domain: "Healthcare",
    matchScore: 88,
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "Smart Grid Infrastructure",
    provider: "edX / MIT",
    type: "Course",
    duration: "6 Weeks",
    impact: "+15 Urban Planning",
    domain: "Urban",
    matchScore: 82,
    difficulty: "Advanced"
  }
];

export const RECENT_ACTIVITY = [
  { id: 1, action: "Completed Module", target: "GIS Basics", time: "2 hours ago" },
  { id: 2, action: "Skill Verified", target: "Python Basics", time: "1 day ago" },
  { id: 3, action: "Joined Project", target: "Smart Traffic Light", time: "3 days ago" },
];

export const CAREER_ROADMAP = [
  {
    stage: "Foundation",
    status: "completed",
    title: "Junior Data Analyst",
    description: "Mastering Python, SQL, and Basic Visualization",
    skills: ["Python", "SQL", "Tableau"]
  },
  {
    stage: "Development",
    status: "current",
    title: "Health Systems Intern",
    description: "Applying analytics to public health datasets and EHR systems.",
    skills: ["Bio-Stats", "FHIR Standards", "Public Health"]
  },
  {
    stage: "Specialization",
    status: "locked",
    title: "Smart City Health Analyst",
    description: "Integrating urban IoT data with epidemiological models.",
    skills: ["IoT Architecture", "GIS Mapping", "Predictive Modeling"]
  },
  {
    stage: "Expert",
    status: "locked",
    title: "Urban Health Policy Architect",
    description: "Leading data-driven policy making for future cities.",
    skills: ["Policy Design", "Team Leadership", "Complex Systems"]
  }
];

export const PATH_CONTENT = {
  health: {
    title: "Health Technology & Informatics",
    icon: "HeartPulse", // String reference for import
    color: "text-red-500",
    bg: "bg-red-50",
    darkBg: "bg-red-900/20",
    border: "border-red-200",
    darkBorder: "border-red-900",
    description: "Master the intersection of medical science and data engineering to improve patient outcomes.",
    progress: 45,
    modules: [
      { title: "Intro to Medical Terminology", status: "completed", type: "Video" },
      { title: "Electronic Health Records (EHR) Data", status: "completed", type: "Lab" },
      { title: "Privacy & HIPAA Compliance", status: "in-progress", type: "Reading" },
      { title: "Bio-Statistics with R", status: "locked", type: "Project" },
      { title: "Telemedicine Architectures", status: "locked", type: "Course" }
    ]
  },
  agri: {
    title: "Agricultural Science & Tech",
    icon: "Sprout",
    color: "text-green-500",
    bg: "bg-green-50",
    darkBg: "bg-green-900/20",
    border: "border-green-200",
    darkBorder: "border-green-900",
    description: "Learn how to use sensors, drones, and AI to optimize food production and sustainability.",
    progress: 15,
    modules: [
      { title: "Fundamentals of Soil Science", status: "completed", type: "Reading" },
      { title: "IoT Sensors in Agriculture", status: "in-progress", type: "Lab" },
      { title: "Drone Mapping for Crop Health", status: "locked", type: "Video" },
      { title: "Supply Chain Logistics", status: "locked", type: "Course" }
    ]
  },
  urban: {
    title: "Urban Planning & Smart Cities",
    icon: "MapPin",
    color: "text-blue-500",
    bg: "bg-blue-50",
    darkBg: "bg-blue-900/20",
    border: "border-blue-200",
    darkBorder: "border-blue-900",
    description: "Design the cities of the future using GIS, spatial data, and urban connectivity frameworks.",
    progress: 72,
    modules: [
      { title: "Urban Theory 101", status: "completed", type: "Course" },
      { title: "GIS Mapping Fundamentals", status: "completed", type: "Project" },
      { title: "Smart Mobility Systems", status: "completed", type: "Lab" },
      { title: "Urban Energy Grids", status: "in-progress", type: "Reading" },
      { title: "Sustainable Infrastructure", status: "locked", type: "Course" }
    ]
  }
};