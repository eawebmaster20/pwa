import { Injectable, signal } from '@angular/core';

// local imports
import { Notification } from '../../model/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = [
    {
      id: 2,
      title: 'Shutting down',
      description: 'A malfunction to the system server occurred',
      time: '5:30',
      status: 'warning',
    },
    {
      id: 3,
      title: 'System is offline',
      description: 'A malfunction to the system server occurred',
      time: '05:30',
      status: 'error',
    },
    {
      id: 23,
      title: 'Launched successfully',
      description: 'System is successfully online, no malfunction detected. All services are active',
      time: '06:30',
      status: 'successful',
    },
    {
      id: 11,
      title: 'Shutting down',
      description: 'A malfunction to the system server occurred',
      time: '5:30',
      status: 'warning',
    },
    {
      id: 22,
      title: 'Failed launch',
      description: 'A malfunction to the system server occurred',
      time: '05:30',
      status: 'error',
    },
    {
      id: 25,
      title: 'Launched successfully',
      description: 'System is successfully online, no malfunction detected. All services are active',
      time: '06:30',
      status: 'successful',
    },
    {
      id: 17,
      title: 'Shutting down',
      description: 'A malfunction to the system server occurred',
      time: '5:30',
      status: 'warning',
    },
    {
      id: 56,
      title: 'Internal server error',
      description: 'A malfunction to the system server occurred',
      time: '05:30',
      status: 'error',
    },
    {
      id: 34,
      title: 'Launched successfully',
      description: 'System is successfully online, no malfunction detected. All services are active',
      time: '06:30',
      status: 'successful',
    },
  ]
  selectedNotification = signal<Notification | null>(null);

  getNotifications() {
    return this.notifications
  }

  selectNotification(id:number) {
    const [data] = this.notifications.filter(notification => notification.id === id);
    this.selectedNotification.set(data);
  }
}
