import * as types from './types';
import { Profile } from 'types/user';

const initialState = {
  token: '',
  user: {},
  property: {},
  properties: []
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
    case types.SET_LOGIN_ACTION:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        property: action.payload.property,
        properties: action.payload.properties
      };
    case types.RESET_PROPERTY:
      return {
        ...state,
        property: {}
      };
    case types.SET_LOGOUT_ACTION:
      return initialState;
    default:
      return state;
  }
}
