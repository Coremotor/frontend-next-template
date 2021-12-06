import axios from 'axios'
import { config } from './config'
import { toast } from 'react-toastify'

export const requestOnServer = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

requestOnServer.interceptors.request.use(
  (config) => {
    // config
    return config
  },
  (error) => Promise.reject(error)
)

requestOnServer.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export const requestOnClient = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

requestOnClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

requestOnClient.interceptors.response.use(
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
