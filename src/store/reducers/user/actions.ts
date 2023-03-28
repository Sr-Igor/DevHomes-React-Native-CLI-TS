import * as types from './types';
import { Workout } from 'types/workout';

export const setUserName = (name: string) => ({
  type: types.SET_USER_NAME,
  payload: { name }
});

export const setWorkoutDays = (workoutDays: number[]) => ({
  type: types.SET_WORKOUT_DAYS,
  payload: { workoutDays }
});

export const setUserLevel = (level: number) => ({
  type: types.SET_USER_LEVEL,
  payload: { level }
});

export const setUserWorkouts = (myWorkouts: Workout[]) => ({
  type: types.SET_WORKOUTS_USER,
  payload: { myWorkouts }
});

export const setDailyProgress = (dailyProgress: string[]) => ({
  type: types.SET_DAILY_PROGRESS,
  payload: { dailyProgress }
});

export const setLastWorkout = (lastWorkout: string) => ({
  type: types.SET_LAST_WORKOUT,
  payload: { lastWorkout }
});

export const resetUser = () => ({
  type: types.RESET_USER
});
