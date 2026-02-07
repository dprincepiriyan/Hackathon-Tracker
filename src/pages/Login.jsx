import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Create Profile</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Prince..." required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Student ID</label>
            <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="ID Number" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="you@college.edu" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">GitHub Link</label>
            <input type="url" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://github.com/..." required />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold mt-4 hover:bg-indigo-700 transition-colors">
            Start Tracking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;