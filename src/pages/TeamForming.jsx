import React, { useState } from 'react';
import { UserPlus, ShieldCheck } from 'lucide-react';

const TeamForming = () => {
  const [members, setMembers] = useState(['']);

  const addMemberField = () => setMembers([...members, '']);

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-indigo-600" size={32} />
          <h2 className="text-2xl font-bold text-slate-800">Form Your Team</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Team Name</label>
            <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Code Knights" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Add Team Members</label>
            {members.map((_, index) => (
              <input 
                key={index}
                type="text" 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg mb-2 outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder={`Member #${index + 1} Name or ID`}
              />
            ))}
            <button 
              onClick={addMemberField}
              className="flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors mt-2"
            >
              <UserPlus size={18} /> Add Another Member
            </button>
          </div>
          
          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold mt-6 hover:bg-black transition-colors">
            Confirm Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamForming;