/*
 *  create by Behrood
 *  date 4/20/2022
 *  axiosBaseQuery
 *  customizing basicQuery for RTKToolkit query with axios
 */

import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import baseApi from './axiosInstance';
import store, { RootState } from '../redux/configureStore';
import { setLogout } from '../redux/userSlice';

const axiosInstance = baseApi._apiCore;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestHeaders;
      sendAuthorization?: boolean;
    },
    any,
    unknown
  > =>
  async (
    { url, method, data, params, headers = {}, sendAuthorization = true },
    { getState },
  ) => {
    try {
      const token = (getState() as RootState).user?.accessToken;
      const authHeader: AxiosRequestHeaders = sendAuthorization
        ? { Authorization: `Bearer ${token}`, ...headers }
        : headers;
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: authHeader,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      if (err.response?.status === 401) {
        window.location.href = `/login?return=${window.location.pathname}`;
        store.dispatch(setLogout());
      }
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default axiosBaseQuery;
