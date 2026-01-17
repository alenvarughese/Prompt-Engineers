SkillIntel - Holistic Academic Intelligence System
SkillIntel is a modern, responsive React dashboard designed to bridge the gap between academic learning and industry requirements. It provides users with visual skill gap analysis, personalized career roadmaps, and AI-driven learning recommendations.

🚀 Features
Interactive Skill Radar: Visual comparison of current skills vs. industry benchmarks using recharts.

Career Roadmap Tracker: Step-by-step visualization of career progression from Foundation to Expert levels.

Smart Recommendations: AI-simulated course and project suggestions based on identified skill gaps.

Dynamic Theming: Fully integrated Dark Mode and Light Mode with persistent state.

Mock Authentication: Built-in simulation for Sign Up/Sign In flows and user profile management.

Responsive Design: Optimized layout for mobile, tablet, and desktop views using Tailwind CSS.

🛠 Tech Stack
Frontend Framework: React.js

Styling: Tailwind CSS

Data Visualization: Recharts

Icons: Lucide React

State Management: React Hooks (useState)

⚙️ Setup & Installation
Follow these steps to get the project running on your local machine.

Prerequisites
Node.js (v16.0.0 or higher)

npm or yarn

1. Clone the repository
Bash

git clone https://github.com/your-username/skill-intel.git
cd skill-intel
2. Install Dependencies
Bash

npm install
# OR
yarn install
3. Configure Tailwind (If setting up from scratch)
If you are pasting the provided code into a new project, ensure your tailwind.config.js includes the following content paths:

JavaScript

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. Run Locally
Start the development server:

Bash

npm run dev
# OR
yarn dev
The application will typically run at http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

🔐 Environment Variables
Currently, the application runs on Mock Data included within the component file, so environment variables are not strictly required for the UI to function.

However, for future API integration, you can create a .env file in the root directory:

Bash

# Example .env configuration
VITE_API_BASE_URL=https://api.skillintel.com/v1
VITE_AUTH_TOKEN_SECRET=your_jwt_secret
VITE_ENABLE_ANALYTICS=true
👤 Test Login Credentials
The application uses a simulation auth system. No actual backend connection is required. You can log in using any email format, but for the best demo experience, use the following:

Email: guest@university.edu

Password: (Any generic password, e.g., 123456)

Role: Student

Note: Clicking "Sign In" will generate a session based on the email provided. Clicking "Sign Up" allows you to set a custom name.

🐛 Basic Error Handling & Troubleshooting
Common Issues
1. "Module not found: Can't resolve 'lucide-react' or 'recharts'"

Fix: Ensure you have installed the required libraries.

Bash

npm install lucide-react recharts
2. Styles look broken / Plain HTML

Fix: Tailwind CSS is likely not generating styles.

Ensure you have import './index.css' (containing Tailwind directives) in your main entry file (main.jsx or index.js).

Check your tailwind.config.js content array matches your file structure.

3. Charts not appearing

Fix: The ResponsiveContainer from Recharts requires a defined height in the parent container. Ensure the parent div of the chart has a class like h-[300px] or specific height style (already included in the source code).

4. Dark Mode not toggling

Fix: The Dark Mode state is managed locally in the App component. If utilizing a system-wide preference, ensure your index.html <body> tag does not have hardcoded background colors overriding the React classes.