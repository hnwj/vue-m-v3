import axios from 'axios'
const request = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000
})

export default request
