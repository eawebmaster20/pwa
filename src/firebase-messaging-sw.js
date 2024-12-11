// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');
// importScripts('./assets/js/firebase-messaging.js');
// importScripts('./assets/js/firebase-app.js') ;
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js') ;
// Your Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyBuuxrL3nOk_KWqBowDrmM-foWDuJmJbaM",
    authDomain: "analytics-crud.firebaseapp.com",
    projectId: "analytics-crud",
    storageBucket: "analytics-crud.firebasestorage.app",
    messagingSenderId: "918538008426",
    appId: "1:918538008426:web:62f837be9732472fefd713",
    measurementId: "G-WWSLVCP396",
    vapidKey:"BLK-eV4HijIj0doKB9RQ3FW1v_5dFF8fJFDTaD1w70WeEYiYcTrhJaMUdXmPXgBrjeXYoQu991oHMNwlEmaJN3Q"
});

const messaging = firebase.messaging();
console.log(messaging);
// Handle background messages
messaging.onBackgroundMessage((payload)=> {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
