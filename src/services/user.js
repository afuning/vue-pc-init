import axios from './axios.conf'

export const getUser = (params) => axios.get('/app/mine/groupon', { params })
