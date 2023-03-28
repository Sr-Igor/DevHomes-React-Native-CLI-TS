import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user';

export default combineReducers({
  profile: userReducer
});
