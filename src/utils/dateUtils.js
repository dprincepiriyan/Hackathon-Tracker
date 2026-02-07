// src/utils/dateUtils.js
import { differenceInDays, parseISO } from 'date-fns';

export const getDeadlineStatus = (deadlineString) => {
  const today = new Date();
  const deadline = parseISO(deadlineString);
  const daysLeft = differenceInDays(deadline, today);

  if (daysLeft < 0) return { label: "Passed", color: "bg-slate-400", urgent: false };
  if (daysLeft <= 3) return { label: `Due in ${daysLeft} days`, color: "bg-red-500", urgent: true };
  if (daysLeft <= 7) return { label: `Due in ${daysLeft} days`, color: "bg-orange-400", urgent: false };
  
  return { label: `${daysLeft} days left`, color: "bg-emerald-500", urgent: false };
};