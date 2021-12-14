import axios from 'axios'
import { config } from './config'
import { toast } from 'react-toastify'

export const serverRequest = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

serverRequest.interceptors.request.use(
  (config) => {
    // config
    return config
  },
  (error) => Promise.reject(error)
)

serverRequest.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export const clientRequest = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

clientRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

clientRequest.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    console.log(error)
    toast('Oops response with error...')
    if (
      error.response.data.error === 'Unauthorized' ||
      error.response.data.error === 'Access denied'
    ) {
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)
