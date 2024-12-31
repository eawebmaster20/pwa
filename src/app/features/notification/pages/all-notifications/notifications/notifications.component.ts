import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// local imports
import { NotificationCardComponent } from "../../../components/notification-card/notification-card.component";
import { ThemeService } from '../../../../../core/services/theme/theme.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterLink, NotificationCardComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications!:any[];

  constructor(
    private themeService: ThemeService
  ) {};

  ngOnInit(): void {
    this.notifications = [
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
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
