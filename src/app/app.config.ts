import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

const firebaseConfig = {
  apiKey: "AIzaSyBuuxrL3nOk_KWqBowDrmM-foWDuJmJbaM",
  authDomain: "analytics-crud.firebaseapp.com",
  databaseURL: "https://analytics-crud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "analytics-crud",
  storageBucket: "analytics-crud.firebasestorage.app",
  messagingSenderId: "918538008426",
  appId: "1:918538008426:web:62f837be9732472fefd713",
  measurementId: "G-WWSLVCP396",
  vapidKey:"BLK-eV4HijIj0doKB9RQ3FW1v_5dFF8fJFDTaD1w70WeEYiYcTrhJaMUdXmPXgBrjeXYoQu991oHMNwlEmaJN3Q"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirebaseApp(() => {
      console.log('Initializing Firebase App');
      return initializeApp(firebaseConfig);
    }),
    provideMessaging(() => getMessaging()),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};
