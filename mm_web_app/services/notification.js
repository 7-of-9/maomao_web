import { fromPromise } from 'mobx-utils'
import axios from 'axios'
import queryString from 'query-string'
import { MAOMAO_API_URL } from '../containers/App/constants'

export function getWelcome (token) {
  return axios.get(`/api/notification/welcome?token=${token}`)
}

export function addUserToken (user_id, hash, token) {
  const apiUrl = `${MAOMAO_API_URL}user/fcm?${queryString.stringify({ user_id, hash })}`
  return fromPromise(axios.post(apiUrl, {
    token
  }))
}
