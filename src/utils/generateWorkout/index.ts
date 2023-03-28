import { Workout } from 'types/workout';

export const generateWorkout = (selectedWorkout: Workout, userWorkouts: Workout[] | [] = []) => {
  const workoutIds = userWorkouts.map((item) => item.id);
  const hasIncluded = workoutIds.includes(selectedWorkout.id);
  let newFormatedWorkouts = [];
  if (hasIncluded) {
    newFormatedWorkouts = userWorkouts.filter((item) => item.id !== selectedWorkout.id);
  } else {
    newFormatedWorkouts = [...userWorkouts, selectedWorkout];
  }
  return newFormatedWorkouts;
};
