const express = require('express')
const router = express.Router()
const request = require('request')
const apikey = 'REDACTED_API_KEY'

function sendMessageToUser (token, data, res) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
      'Authorization': `key=${apikey}`
    },
    body: JSON.stringify(
      {
        data: {
          notification: data
        },
        to: token,
        priority: 'high'
      }
    )
  }, function (error, response, body) {
    if (error) {
      res.status(400).send('Error')
    } else if (response.statusCode >= 400) {
      res.status(400).send('HTTP Error: ' + response.statusCode + ' - ' + response.statusMessage + '\n' + body)
    } else {
      res.status(200).send('Done!')
    }
  })
}

router.get('/welcome', (req, res) => {
  sendMessageToUser(req.query.token, {
    title: 'Welcome to maomao, notification subscribed',
    body: 'Now you will get notified with interesting discoveries',
    tag: 'notification'
  }, res)
})

router.get('/check-auth-notification', (req, res) => {
  if (req.session.currentUser) {
    res.json(req.session.currentUser)
  } else {
    res.json({})
  }
})

module.exports = router
