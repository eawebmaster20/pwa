import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// local imports
import { NotificationCardComponent } from "../../../components/notification-card/notification-card.component";
import { ThemeService } from '../../../../../core/services/theme/theme.service';
import { NotificationService } from '../../../service/notification-service/notification.service';

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
    private themeService: ThemeService,
    private notificationSerive: NotificationService,
    private router: Router,
  ) {};

  ngOnInit(): void {
    this.notifications = this.notificationSerive.getNotifications();
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }

  selectNotification(id:number):void {
    this.notificationSerive.selectNotification(id);
    this.router.navigate([`/notifications/${id}`]);
  }
}
