self.addEventListener('push', (event) => {
    const data = event.data.json();
    console.log('Push notification received:', data);
  
    const options = {
      body: data.body,
      icon: '/assets/icons/icon-192x192.png',
      data: {
        url: data.url
      }
    };
  
    event.waitUntil(self.registration.showNotification(data.title, options));
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  });
  