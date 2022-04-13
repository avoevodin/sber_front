import axios from 'axios'
import { API_TOKEN } from '../constants'

const axiosInstance = axios.create({
  baseURL: 'https://api.react-learning.ru/',
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
})

export default axiosInstance
