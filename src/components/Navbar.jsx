import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Trophy, User, Shield } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <Trophy size={18} /> },
    { name: 'Profile', path: '/login', icon: <User size={18} /> },
    { name: 'Admin', path: '/admin', icon: <Shield size={18} /> },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Layout className="text-white" size={20} />
          </div>
          <span className="font-black text-xl text-slate-900 tracking-tight">
            Hack<span className="text-indigo-600">Track</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-1 sm:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;