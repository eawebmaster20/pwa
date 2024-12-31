import { ApplicationRef, Component, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

// local imports
import { MediaQueryService } from './core/services/media-query/media-query.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'pwa';
  token: string | null = null;

  constructor(
    private appRef: ApplicationRef, 
    private updates: SwUpdate,
    private router: Router,
    private mediaQueryService: MediaQueryService,
  ) {
    // dynamically handle viewport display
    effect(() => {
      this.handleMobileView();
    })
  }

  ngOnInit() {
    // Initialize Firebase app here
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

    // Ensure Firebase app is initialized
    const app = initializeApp(firebaseConfig);
    console.log('Firebase App Initialized:', app);

    // Call methods after Firebase initialization
    this.requestPermission();
    this.listenForMessages();

    // checks viewport
    this.handleMobileView ();
  }

  ngAfterViewInit() {
    const everySixHours$ = interval(6 * 60 * 60 * 1000);

    everySixHours$.subscribe(async () => {
      try {
        const updateFound = await this.updates.checkForUpdate();
        if (updateFound) {
          console.log('A new version is available. Reloading...');
          document.location.reload();
        } else {
          console.log('Already on the latest version.');
        }
      } catch (err) {
        console.error('Failed to check for updates:', err);
      }
    });
  }

  requestPermission() {
    try {
      const messaging = getMessaging();
      getToken(messaging, {
        vapidKey: 'BLK-eV4HijIj0doKB9RQ3FW1v_5dFF8fJFDTaD1w70WeEYiYcTrhJaMUdXmPXgBrjeXYoQu991oHMNwlEmaJN3Q' // Add your VAPID key from Firebase settings
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token received: ', currentToken);
            this.token = currentToken;
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.error('An error occurred while retrieving token.', err);
        });
    } catch (err) {
      console.error('Firebase Messaging initialization error:', err);
    }
  }

  listenForMessages() {
    try {
      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        console.log('Message received: ', payload);
        // Display a notification or handle the message as needed
      });
    } catch (err) {
      console.error('Error listening for messages:', err);
    }
  }

  // handle mobile viewport
  handleMobileView () {
    const isMobile = this.mediaQueryService.isMobile()
    if (!isMobile) {
      this.router.navigate(['/invalid-viewport'])
    } else if (isMobile) {
      this.router.navigate(['']);
    }

  }
}
