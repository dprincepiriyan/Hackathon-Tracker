// src/pages/Dashboard.jsx
import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo
import { db } from '../firebase';
import { getDeadlineStatus } from '../utils/dateUtils';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import HackathonCard from '../components/HackathonCard';
import { compareAsc, parseISO } from 'date-fns';

const requestNotificationPermission = () => {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
};

const sendDeadlineAlert = (hackathons) => {
  hackathons.forEach(h => {
    const status = getDeadlineStatus(h.deadline);
    if (status.urgent && Notification.permission === "granted") {
      new Notification(`Hackathon Alert: ${h.name}`, {
        body: `Deadline is in ${status.label}. Don't forget to upload your PPT!`,
        icon: "/logo192.png" 
      });
    }
  });
};

const Dashboard = () => {
  const [hackathons, setHackathons] = useState([]);
  const [filter, setFilter] = useState('All');

  // 1. Real-time Firebase Listener
  useEffect(() => {
    const q = query(collection(db, "hackathons"), orderBy("deadline", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const hackData = [];
      querySnapshot.forEach((doc) => {
        hackData.push({ id: doc.id, ...doc.data() });
      });
      setHackathons(hackData);
    });
    return () => unsubscribe();
  }, []);

  // 2. Notification Trigger
  useEffect(() => {
    requestNotificationPermission();
    if (hackathons.length > 0) {
      sendDeadlineAlert(hackathons);
    }
  }, [hackathons]);

  // 3. Memoized Sorting & Filtering (Efficient!)
  const filteredHackathons = useMemo(() => {
    let list = [...hackathons].sort((a, b) => 
      compareAsc(parseISO(a.deadline), parseISO(b.deadline))
    );
    
    if (filter !== 'All') {
      list = list.filter(h => h.category === filter);
    }
    return list;
  }, [hackathons, filter]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-slate-900">Live Hackathons</h1>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-lg overflow-x-auto max-w-full">
          {['All', 'AI', 'Blockchain', 'IoT', 'Cybersecurity'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                filter === cat ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredHackathons.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-400 font-medium">No hackathons found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map(h => (
            <HackathonCard 
              key={h.id} 
              hackathon={h} 
              onRegister={(selected) => console.log("Registered for:", selected.name)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;