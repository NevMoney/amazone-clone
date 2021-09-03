import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/with-a-twist-330bf/us-central1/api', //api URL from cloudFunction
})

export default instance
