importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '323116239222'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationData = JSON.parse(payload.data.notification) || {}
  const notificationTitle = notificationData.title || 'Welcome to Maomao';
  const notificationOptions = {
    body: notificationData.body || 'Discover and Share.',
    icon: notificationData.icon || 'static/images/icons/android-icon-48x48.png',
    tag: notificationData.tag || 'notification',
    image: notificationData.image || '',
    renotify: notificationData.renotify || false,
    data: {
      url: notificationData.url || 'https://www.maomao.rocks',
    }
  }
  if (notificationData.tag === 'notification') {
    return self.registration.showNotification(notificationTitle, notificationOptions)
  } else if (notificationData.tag === 'user-notification') {
    return fetch('/api/notification/check-auth-notification', {
      credentials: 'include',
      method: 'get'
    }).then((response) => {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json()
      }
      throw new TypeError("Oops, we haven't got notification data!")
    })
    .then((serverData) => {
      if (serverData.id === notificationData.userId) {
        return self.registration.showNotification(notificationTitle, notificationOptions)
      } else {
        return self.registration.showNotification('Maomao', {
          body: 'Discover and Share.',
          icon: 'static/images/icons/android-icon-48x48.png',
          tag: 'notification',
          data: {
            url: 'https://www.maomao.rocks',
          }
        })
      }
    })
  }

})


self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.matchAll({includeUncontrolled: true, type: 'window'}).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i]
      if (client.url === event.notification.data.url && 'focus' in client)
        return client.focus()
    }
    if (clients.openWindow)
      return clients.openWindow('/')
  }));
});
