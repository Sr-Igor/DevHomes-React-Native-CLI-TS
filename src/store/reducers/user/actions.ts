import * as types from './types';

export const setToken = (token: string) => ({
  type: types.SET_PROFILE_TOKEN,
  payload: { token }
});

export const setUser = (user: string) => ({
  type: types.SET_PROFILE_USER,
  payload: { user }
});

export const setProperty = (property: string) => ({
  type: types.SET_PROFILE_PROPERTY,
  payload: { property }
});
