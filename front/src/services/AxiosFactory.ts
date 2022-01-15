import Axios, { AxiosInstance } from 'axios';

export default (baseURL: string) : AxiosInstance => {
  const axios = Axios.create({
    baseURL,
  })

  axios.interceptors.request.use((config) => {
    if (config.headers) {
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  });
  return axios
}
