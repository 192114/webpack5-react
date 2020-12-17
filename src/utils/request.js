import axios from 'axios'

// 创建实例
const axiosInstance = axios.create({
  timeout: 5000,
})

// 请求拦截器
axiosInstance.interceptors.request.use()

// 响应拦截
axiosInstance.interceptors.response.use()

export default axiosInstance
