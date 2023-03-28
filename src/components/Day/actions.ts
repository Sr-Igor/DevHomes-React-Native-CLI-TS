import { formatDate } from 'utils/formatDate';
import { legends } from 'utils/constants';

export const formatedBallDay = (
  day: number,
  month: number,
  dailyProgress: string[],
  workoutDays: number[]
) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const thisDate = new Date(today.getFullYear(), month, day);

  let backgroundColor = null;

  if (workoutDays?.includes(thisDate.getDay())) {
    if (thisDate.getTime() < today.getTime()) {
      if (dailyProgress?.includes(formatDate(thisDate))) {
        backgroundColor = legends[1].color;
      } else {
        backgroundColor = legends[2].color;
      }
    } else {
      backgroundColor = legends[4].color;
    }
  } else {
    backgroundColor = legends[3].color;
  }

  if (thisDate.getTime() === today.getTime()) {
    backgroundColor = legends[0].color;
  }

  return {
    backgroundColor
  };
};
