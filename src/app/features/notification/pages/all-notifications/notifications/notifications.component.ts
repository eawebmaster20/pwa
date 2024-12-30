import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// local imports
import { NotificationCardComponent } from "../../../components/notification-card/notification-card.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterLink, NotificationCardComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications!:any[];

  ngOnInit(): void {
    this.notifications = [
      {
        id: 2,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '5:30'
      },
      {
        id: 3,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '05:30'
      },
      {
        id: 23,
        title: 'Launched successfully',
        description: 'System is successfully online, no malfunction detected. All services are active',
        time: '06:30'
      },
      {
        id: 11,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '5:30'
      },
      {
        id: 22,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '05:30'
      },
      {
        id: 25,
        title: 'Launched successfully',
        description: 'System is successfully online, no malfunction detected. All services are active',
        time: '06:30'
      },
      {
        id: 17,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '5:30'
      },
      {
        id: 56,
        title: 'Shutting down',
        description: 'A malfunction to the system server occurred',
        time: '05:30'
      },
      {
        id: 34,
        title: 'Launched successfully',
        description: 'System is successfully online, no malfunction detected. All services are active',
        time: '06:30'
      },
    ]
  }
}
