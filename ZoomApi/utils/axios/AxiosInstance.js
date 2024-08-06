const axios = require('axios')
const fetcher = axios.create({
    baseURL: process.env.ZOOM_API,
    // timeout: 10000
})
axios.interceptors.request.use(function (config) {
    // config.headers.Authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
module.exports = {
    fetcher
}