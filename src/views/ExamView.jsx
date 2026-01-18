import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../api';
import CircularProgress from '../components/CircularProgress';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

const ExamView = ({ user, isDarkMode }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const resource = state?.resource; // Data passed from "Start Now" button

  // If no resource data, go back
  if (!resource) {
    navigate('/recommendations');
    return null;
  }

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (week, qIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [`${week}-${qIndex}`]: optionIndex
    });
  };

  const calculateScore = async () => {
    // Validation: Check if all questions (3 per week * 3 weeks = 9) are answered
    const totalQuestions = 9;
    if (Object.keys(answers).length < totalQuestions) {
      alert("Please answer all questions in Week 1, 2, and 3 before submitting.");
      return;
    }

    let correctCount = 0;

    // Check Week 1
    resource.examData.week1.forEach((q, i) => {
      if (answers[`week1-${i}`] === q.correctAnswer) correctCount++;
    });
    // Check Week 2
    resource.examData.week2.forEach((q, i) => {
      if (answers[`week2-${i}`] === q.correctAnswer) correctCount++;
    });
    // Check Week 3
    resource.examData.week3.forEach((q, i) => {
      if (answers[`week3-${i}`] === q.correctAnswer) correctCount++;
    });

    const finalPercentage = (correctCount / totalQuestions) * 100;
    setScore(finalPercentage);
    setSubmitted(true);

    // Save to Database
    try {
      await API.post(`/users/${user._id}/exam-submit`, {
        resourceId: resource._id,
        title: resource.title,
        score: finalPercentage
      });
    } catch (error) {
      console.error("Failed to save score", error);
    }
  };

  const cardClass = isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900";
  const sectionClass = `p-6 mb-6 rounded-xl border shadow-sm ${cardClass}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in zoom-in duration-500">
        <h2 className="text-2xl font-bold mb-6">Exam Completed!</h2>
        <CircularProgress percentage={score} size={200} />
        
        <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg text-center">
            <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className="text-sm font-bold opacity-70">Week 1</p>
                <p className="text-xl font-bold text-green-500">Completed</p>
            </div>
            <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className="text-sm font-bold opacity-70">Week 2</p>
                <p className="text-xl font-bold text-green-500">Completed</p>
            </div>
            <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className="text-sm font-bold opacity-70">Week 3</p>
                <p className="text-xl font-bold text-green-500">Completed</p>
            </div>
        </div>

        <button 
          onClick={() => navigate('/analysis')}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          View in Skill Analysis
        </button>
      </div>
    );
  }

  // Helper to render a week's questions
  const renderWeek = (weekKey, title, questions) => (
    <div className={sectionClass}>
      <h3 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-600">{title}</h3>
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="mb-6">
          <p className="font-semibold mb-3">{qIdx + 1}. {q.questionText}</p>
          <div className="space-y-2">
            {q.options.map((opt, optIdx) => (
              <label key={optIdx} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                answers[`${weekKey}-${qIdx}`] === optIdx 
                  ? "bg-blue-50 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400" 
                  : "hover:bg-gray-50 dark:hover:bg-gray-700 border-transparent"
              }`}>
                <input 
                  type="radio" 
                  name={`${weekKey}-${qIdx}`}
                  className="w-4 h-4 text-blue-600"
                  onChange={() => handleSelect(weekKey, qIdx, optIdx)}
                  checked={answers[`${weekKey}-${qIdx}`] === optIdx}
                />
                <span className="ml-3 text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="animate-in slide-in-from-right duration-500 pb-20">
      <button onClick={() => navigate(-1)} className="flex items-center text-sm mb-4 opacity-70 hover:opacity-100">
        <ArrowLeft size={16} className="mr-1"/> Back
      </button>

      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{resource.title}</h1>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Exam Mode</span>
      </div>

      {renderWeek('week1', 'Week 1', resource.examData.week1)}
      {renderWeek('week2', 'Week 2', resource.examData.week2)}
      {renderWeek('week3', 'Week 3', resource.examData.week3)}

      {/* Week 4 - Coming Soon */}
      <div className={`${sectionClass} opacity-80`}>
        <h3 className="text-xl font-bold mb-2">Week 4</h3>
        <div className="p-8 text-center border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-600">
           <p className="text-lg font-bold mb-2">{resource.examData.week4.message}</p>
           <a 
             href={resource.examData.week4.link} 
             target="_blank" 
             rel="noreferrer"
             className="text-blue-500 underline hover:text-blue-400"
           >
             Access Online Materials Here
           </a>
        </div>
      </div>

      <button 
        onClick={calculateScore}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition-transform hover:scale-[1.01]"
      >
        Submit Exam & Get Results
      </button>
    </div>
  );
};

export default ExamView;