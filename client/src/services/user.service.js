import ApiService from './api.service'
import { TokenService } from './storage.service'

class AuthenticationError extends Error {
  constructor (errorCode, message) {
    super(message)
    this.name = this.costructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {

  // Login User and store access token to TokenService
  // @returns access_token
  // @throws AuthenticationError

  login: async (email, password) => {
    const requestData = {
      method: 'post',
      url: '/o/token/',
      data: {
        grant_type: 'password',
        username: email,
        password: password
      },
      auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      }
    }
    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.saveToken(response.data.access_token)
      ApiService.setHeader()

      ApiService.mount401Interception()

      return response.data.access_token
    } catch (err) {
      throw new AuthenticationError(err.response.status, err.response.data.detail)
    }
  },
  logout () {
    // RMV TOKEN AND HEADER
    TokenService.removeToken()
    ApiService.removeHeader()
    ApiService.unmount401Interceptor()
  }
}

export default UserService

export { UserService, AuthenticationError }
