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
  
  // self.addEventListener('notificationclick', (event) => {
  //   event.notification.close();
  //   const data = event.notification.data;
  //   const urlToOpen = `/notifications?body=${encodeURIComponent(JSON.stringify(data) || '')}`;
  //   console.log(event);
  //   event.waitUntil(
  //     clients.openWindow(urlToOpen)
  //   );
  // });
  self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Close the notification
  
    const data = event.notification.data;
    const urlToOpen = data?.url || '/notifications';
  
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // Check if there's already an open client (tab) of the app
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            // Navigate within the existing tab
            client.navigate(urlToOpen);
            return client.focus();
          }
        }
  
        // If no open tab, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  });
  