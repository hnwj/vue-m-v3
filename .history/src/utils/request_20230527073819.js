import axios from 'axios'
const request = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net',
  timeout: 1000
})

export default request
