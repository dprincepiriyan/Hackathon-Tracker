// src/components/HackathonCard.jsx
import React from 'react';
import { ExternalLink, Calendar, AlertCircle } from 'lucide-react';
import { getDeadlineStatus } from '../utils/dateUtils';

const HackathonCard = ({ hackathon, onRegister }) => {
  const status = getDeadlineStatus(hackathon.deadline);

  return (
    <div className={`bg-white border ${status.urgent ? 'border-red-200 ring-1 ring-red-100' : 'border-slate-200'} rounded-xl p-5 shadow-sm transition-all`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full uppercase">
              {hackathon.category}
            </span>
            {status.urgent && (
              <span className="flex items-center gap-1 text-xs font-bold px-2 py-1 bg-red-100 text-red-600 rounded-full animate-pulse">
                <AlertCircle size={12} /> URGENT
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mt-2">{hackathon.name}</h3>
        </div>
        <input 
          type="checkbox" 
          onChange={() => onRegister(hackathon)}
          className="w-5 h-5 rounded border-slate-300 text-indigo-600 cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-slate-500 text-sm">
          <Calendar size={16} className="mr-2" />
          <span>{hackathon.deadline}</span>
        </div>
        <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded ${status.color}`}>
          {status.label}
        </span>
      </div>

      <a href={hackathon.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200">
        View Details <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  );
};

export default HackathonCard;