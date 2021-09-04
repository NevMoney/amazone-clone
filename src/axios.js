import axios from 'axios'

const instance = axios.create({
  // LOCAL testing API
  // baseURL: 'http://localhost:5001/with-a-twist-330bf/us-central1/api',

  // deployed URL
  baseURL: 'https://us-central1-with-a-twist-330bf.cloudfunctions.net/api',
})

export default instance
