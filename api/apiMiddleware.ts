import { authAPI } from './auth';

export const apiMiddleware = [
  authAPI.middleware,
];
