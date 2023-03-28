import { addHours } from 'date-fns';
export const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const endToDate = () => {
  const now = addHours(Date.now(), 0);
  let endToDay: Date | number = new Date();
  endToDay.setHours(23);
  endToDay.setMinutes(59);
  endToDay.setSeconds(59);
  endToDay = endToDay.getTime();
  const diff = endToDay - now.getTime();

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / (1000 * 60) - 60 * h);
  const s = Math.floor(((diff / 1000 / 60 / 60 - h) * 60 - m) * 60);

  return `${h}h ${m}m ${s}s`;
};
