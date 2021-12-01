import axios from 'axios'
import { config } from './config'
import { toast } from 'react-toastify'

export const request = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`
    }
    // console.log('request config after interceptor:', config)
    return config
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    toast(JSON.parse(error.response.data))
    if (
      error.response.data.error === 'Unauthorized' ||
      error.response.data.error === 'Access denied'
    ) {
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)