import * as types from './types';
import { Profile } from 'types/user';

const initialState = {
  token: '',
  user: {},
  property: {}
};

type Action = {
  type: string;
  payload: Profile;
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.SET_PROFILE_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
    case types.SET_PROFILE_USER:
      return {
        ...state,
        user: action.payload.user
      };
    case types.SET_PROFILE_PROPERTY:
      return {
        ...state,
        property: action.payload.property
      };
    default:
      return state;
  }
}
