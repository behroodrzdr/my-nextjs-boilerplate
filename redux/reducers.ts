import toastSlice from './toastSlice';
import userSlice from './userSlice';

import { combineReducers } from 'redux';
import { apiReducers } from '../api/apiReducers';

const rootReducer = combineReducers({
  user: userSlice,
  toast: toastSlice,
  ...apiReducers,
});

export default rootReducer;
