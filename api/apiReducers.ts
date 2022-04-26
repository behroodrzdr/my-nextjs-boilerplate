import { authAPI } from './auth';

export const apiReducers = {
  [authAPI.reducerPath]: authAPI.reducer,
};
