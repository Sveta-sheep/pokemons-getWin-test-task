import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 30000,
};

export const axiosApi = axios.create(axiosConfig);
