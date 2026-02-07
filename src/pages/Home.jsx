import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, LogIn } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
        Hackathon<span className="text-indigo-600">Tracker</span>
      </h1>
      <p className="text-slate-500 max-w-md mb-10 text-lg">
        Manage your teams, track deadlines, and never lose a presentation again.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button 
          onClick={() => navigate('/team-forming')}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          <Users size={20} /> Create a Team
        </button>
        <button 
          onClick={() => navigate('/login')}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all"
        >
          <LogIn size={20} /> Login
        </button>
      </div>
    </div>
  );
};

export default Home;