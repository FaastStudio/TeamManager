import axios from 'axios'
import { TokenService } from './storage.service'

const ApiService = {

  init (baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setHeader () {
    axios.defaults.headers.common['access_token'] = `${TokenService.getToken()}`
  },

  removeHeader () {
    axios.defaults.headers.common = {}
  },

  get (resource, data) {
    return axios.get(resource, data)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },

  // Custom Axios request:

  // data is object containing the following properties:
  //   -method
  //   -url
  //   -data ... request payload
  customRequest (data) {
    return axios(data)
  }

}

export default ApiService
