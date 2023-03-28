import { Workout } from './workout';

export type User = {
  name: string;
  level: number; // 1 - 2 - 3
  workoutDays: number[]; // 1- 0
  myWorkouts: Workout[];
  lastWorkout: number; //ID
  dailyProgress: string[];
};
