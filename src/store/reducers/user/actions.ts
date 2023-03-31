import * as types from './types';
import { Profile, Property } from 'types/user';

export const setToken = (token: string) => ({
  type: types.SET_PROFILE_TOKEN,
  payload: { token }
});

export const setUser = (user: string) => ({
  type: types.SET_PROFILE_USER,
  payload: { user }
});

export const setProperty = (property: Property) => ({
  type: types.SET_PROFILE_PROPERTY,
  payload: { property }
});

export const setLogin = (profile: Profile) => {
  return {
    type: types.SET_LOGIN_ACTION,
    payload: profile
  };
};

export const Logout = () => ({
  type: types.SET_LOGOUT_ACTION
});


export const resetProperty = () => ({
  type: types.RESET_PROPERTY
})
