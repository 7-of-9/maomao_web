
import axios from 'axios'

export function getWelcome (token) {
  return axios.get(`/api/notification/welcome?token=${token}`)
}
