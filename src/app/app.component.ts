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
import { NotificationService } from './features/notification/service/notification-service/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa';
  token: string | null = null;
  message:any = null;

  constructor(
    private appRef: ApplicationRef, 
    private updates: SwUpdate,
    private router: Router,
    private socket: WebSocketService,
    private notificationService: NotificationService
    // private mediaQueryService: MediaQueryService,
  ) {
    // dynamically handle viewport display
    // effect(() => {
    //   this.handleMobileView();
    // })
  }

  ngOnInit() {
    this.socket.on('message', (msg) => {
      this.message = msg;
      console.log(msg);
      this.notificationService.allNotifications.push(msg);
      if (Notification.permission === 'granted') {
        this.showNotification(msg.title);
      } else {
        this.requestNotificationPermission();
        console.warn('Notifications are not permitted.');
      }
    });
  }

  sendMessage(): void {
    this.socket.emit('message', this.message);
  }

  ngAfterViewInit() {
  }

  showNotification(message: any): void {
    interface ExtendedNotificationOptions extends NotificationOptions {
      actions?: Array<{ action: string; title: string; icon?: string }>;
    }

    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) {
        const options: ExtendedNotificationOptions = {
          body: message.body,
          icon: message.img || '/assets/icons/icon-192x192.png',
          data: { dateOfArrival: Date.now(), primaryKey: 1 },
          actions: [{ action: 'explore', title: 'View Message' }],
        };
        reg.showNotification('New Message', options);
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
