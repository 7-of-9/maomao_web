import { normalize, schema } from 'normalizr'

// Define a users schema
const url = new schema.Entity('urls', {}, { idAttribute: 'url_id' })
const topic = new schema.Entity('topics', {
}, { idAttribute: 'term_id' })

// Define your comments schema
const myStream = new schema.Entity('myStreams', {
  urls: [url]
}, { idAttribute: 'user_id' })

const sharedList = new schema.Entity('shareLists', {
  urls: [url]
}, { idAttribute: 'share_code' })

const friendStream = new schema.Entity('friendStreams', {
  shares_received: [sharedList]
}, { idAttribute: 'user_id' })

const own = new schema.Entity('own', {
  mine: myStream,
  topics: [topic]
}, { idAttribute: 'mine' })

const friend = new schema.Entity('friend', {
  received: [ friendStream ],
  topics: [topic]
}, { idAttribute: 'received' })

export function normalizedOwnData (data) {
  if (data) {
    return normalize(data, own)
  }
  return { entities: {}, result: {} }
}

export function normalizedFriends (data) {
  if (data) {
    return normalize(data, friend)
  }
  return { entities: {}, result: {} }
}
