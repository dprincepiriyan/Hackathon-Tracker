import React, { useState } from 'react';
import { db } from '../firebase'; // Import the db we just set up
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { LayoutDashboard, PlusCircle, Link as LinkIcon, Calendar, Tag } from 'lucide-react';

const Admin = () => {
  const [hackathon, setHackathon] = useState({
    name: '',
    deadline: '',
    link: '',
    category: 'AI'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "hackathons"), {
        ...hackathon,
        createdAt: serverTimestamp()
      });
      alert("Broadcasted to Firebase successfully!");
      setHackathon({ name: '', deadline: '', link: '', category: 'AI' });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error broadcasting hackathon. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-slate-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <LayoutDashboard className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Admin Broadcast Panel</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <PlusCircle size={16} /> Hackathon Name
            </label>
            <input 
              type="text" 
              required
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="e.g. Global AI Summit 2026"
              value={hackathon.name}
              onChange={(e) => setHackathon({...hackathon, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar size={16} /> Last Date
              </label>
              <input 
                type="date" 
                required
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={hackathon.deadline}
                onChange={(e) => setHackathon({...hackathon, deadline: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Tag size={16} /> Category
              </label>
              <select 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
                value={hackathon.category}
                onChange={(e) => setHackathon({...hackathon, category: e.target.value})}
              >
                <option value="AI">AI</option>
                <option value="IoT">IoT</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Web3">Web3</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <LinkIcon size={16} /> Registration Link
            </label>
            <input 
              type="url" 
              required
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="https://hackathon.com/register"
              value={hackathon.link}
              onChange={(e) => setHackathon({...hackathon, link: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold mt-4 hover:bg-indigo-600 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Broadcast to All Users
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;