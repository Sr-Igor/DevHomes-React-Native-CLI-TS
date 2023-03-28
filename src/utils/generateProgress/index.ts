export const generateProgress = (workoutDays: string[] = [], lastWorkout: string) => {
  if (workoutDays?.includes(lastWorkout)) {
    return workoutDays.filter((item) => item !== lastWorkout);
  } else {
    return [...workoutDays, lastWorkout];
  }
};
