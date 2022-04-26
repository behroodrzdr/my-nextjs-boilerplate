import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';
import * as mapper from './mapper';
import { TAuth  } from '../../types';

export const AUTH_API_REDUCER = 'authApi';
export const authAPI = createApi({
  reducerPath: AUTH_API_REDUCER,
  baseQuery: axiosBaseQuery({ baseUrl: 'api/auth' }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    postLoginOtp: builder.mutation<TAuth, any>({
      query: data => {
        return {
          url: '/login-otp',
          method: 'POST',
          sendAuthorization: false,
          data,
        };
      },
      transformResponse: mapper.postSendOtpMapper,
    }),
    postUserLogout: builder.mutation<null, unknown>({
      query: () => {
        return {
          url: '/logout',
          method: 'POST',
        };
      },
    }),
  }),
});

export const {
  usePostLoginOtpMutation,
  usePostUserLogoutMutation,
} = authAPI;
