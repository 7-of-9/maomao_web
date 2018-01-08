import { fromPromise } from 'mobx-utils'
import axios from 'axios'
import queryString from 'query-string'
import { MAOMAO_API_URL } from '../containers/App/constants'

export function getShareInfo (code) {
  return fromPromise(axios.get(`${MAOMAO_API_URL}share/info?share_code=${code}`))
}

export function acceptInvite (id, hash, code) {
  const apiUrl = `${MAOMAO_API_URL}share/accept?user_id=${id}&hash=${hash}&share_code=${code}`
  return fromPromise(axios.get(apiUrl))
}

export function unfollow (id, hash, code, sourceUserId) {
  const apiUrl = `${MAOMAO_API_URL}share/target/toggle?user_id=${id}&hash=${hash}&share_code=${code}&source_user_id=${sourceUserId}`
  return fromPromise(axios.get(apiUrl))
}

export function pauseShare (id, hash, code, targetUserId) {
  const apiUrl = `${MAOMAO_API_URL}share/source/toggle?user_id=${id}&hash=${hash}&share_code=${code}&target_user_id=${targetUserId}`
  return fromPromise(axios.get(apiUrl))
}

export function getShareUrl (user_id, hash, url_id, share_code) {
  //TODO: adjust with dom API regarding this endpoint
  const apiUrl = `${MAOMAO_API_URL}share/url?${queryString.stringify({user_id, hash, share_code, url_id})}`
  return fromPromise(axios.get(apiUrl))
}
