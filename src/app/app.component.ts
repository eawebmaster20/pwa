import { ApplicationRef, Component, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { initializeApp } from 'firebase/app';

// local imports
import { MediaQueryService } from './core/services/media-query/media-query.service';
import { WebSocketService } from './core/services/web-socket.service';

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
    private socket: WebSocketService,
    // private mediaQueryService: MediaQueryService,
  ) {
    // dynamically handle viewport display
    // effect(() => {
    //   this.handleMobileView();
    // })
  }

  ngOnInit() {
    this.socket.on('message', (msg: string) => {
      console.log(msg)
      if (Notification.permission === 'granted') {
        this.showNotification(msg);
      } else {
        this.requestNotificationPermission();
        console.warn('Notifications are not permitted.');
      }
    });
  }

  sendMessage(): void {
    this.socket.emit('message', {
      title: 'New Notification',
      body: 'You have a new message!',
      url: '/messages'
    });
  }

  ngAfterViewInit() {
  }

  showNotification(message: string): void {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) {
        reg.showNotification('New Message', {
          body: message,
          icon: '/assets/icons/icon-192x192.png',
          // vibrate: [100, 50, 100],
          data: { dateOfArrival: Date.now(), primaryKey: 1 },
          // actions: [{ action: 'explore', title: 'View Message' }]
        });
      }
    });
  }
  
  requestNotificationPermission(): void {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  }
  // handle mobile viewport
  // handleMobileView () {
  //   const isMobile = this.mediaQueryService.isMobile()
  //   if (!isMobile) {
  //     this.router.navigate(['/invalid-viewport'])
  //   } else if (isMobile) {
  //     this.router.navigate(['']);
  //   }

  // }
}
