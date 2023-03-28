import * as types from './types';
import { User } from 'types/user';

const initialState = {
  name: '',
  level: '', // 1 - 2 - 3
  workoutDays: [], // 1- 0
  myWorkouts: [],
  lastWorkout: '', //ID
  dailyProgress: []
};

type Action = {
  type: string;
  payload: User;
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    case types.SET_WORKOUT_DAYS:
      return {
        ...state,
        workoutDays: action.payload.workoutDays
      };
    case types.SET_USER_LEVEL:
      return {
        ...state,
        level: action.payload.level
      };
    case types.SET_WORKOUTS_USER:
      return {
        ...state,
        myWorkouts: action.payload.myWorkouts
      };
    case types.SET_DAILY_PROGRESS:
      return {
        ...state,
        dailyProgress: action.payload.dailyProgress
      };
    case types.SET_LAST_WORKOUT:
      return {
        ...state,
        lastWorkout: action.payload.lastWorkout
      };
    case types.RESET_USER:
      return initialState;
    default:
      return state;
  }
}
