import Axios from 'axios'
import { MESSAGEMAP, EXPORT_MAP } from './error-map'

// 创建 axios 实例
const axios = Axios.create({
  timeout: 10000,
  withCredentials: true,
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  loading: false,
  capture: false
})

// axios 请求拦截
axios.interceptors.request.use(
  config => {
    const data = { t: Date.now() }
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...data
      }
    }

    return config
  },
  error => Promise.reject(error)
)

// axios 响应拦截
axios.interceptors.response.use(
  res => {
    const { data } = res
    let { code, msg } = data

    if (code === 0) {
      return Promise.resolve(data.data)
    } if (EXPORT_MAP.indexOf(code)) {
      return Promise.reject(data)
    }

    msg = MESSAGEMAP[code] || msg
    return Promise.reject(new Error(msg))
  },
  error => {
    const message = error.message.includes('timeout')
      ? '网络连接超时，请稍后再试'
      : error.message

    return Promise.reject(new Error(message))
  }
)

export default axios
