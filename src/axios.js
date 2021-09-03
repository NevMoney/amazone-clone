import axios from 'axios'

const instance = axios.create({
  baseURL: '...', //api URL from cloudFunction
})

export default instance
