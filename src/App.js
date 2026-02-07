import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TeamForming from './pages/TeamForming';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navbar stays here outside of Routes to persist across pages */}
        <Navbar /> 
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/team-forming" element={<TeamForming />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Optional Footer */}
        <footer className="py-6 text-center text-slate-400 text-xs border-t border-slate-200 bg-white">
          &copy; 2026 HackTrack - Built for CS Students
        </footer>
      </div>
    </Router>
  );
}

export default App;