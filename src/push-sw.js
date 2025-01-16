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
  
    event.waitUntil(self.registration.showNotification(data, options));
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const data = event.notification.data;
    const urlToOpen = `/notifications?body=${encodeURIComponent(JSON.stringify(data) || '')}`;
    console.log(event);
    event.waitUntil(
      clients.openWindow(urlToOpen)
    );
  });
  