import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';

// local imports
import { NotificationCardComponent } from "../../../components/notification-card/notification-card.component";
import { NotificationService } from '../../../service/notification-service/notification.service';
import { NavPanelComponent } from '../../../../../shared/components/nav-panel/nav-panel.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationCardComponent, NavPanelComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications!:any[];

  constructor(
    private notificationSerive: NotificationService,
    private router: Router,
  ) {};

  ngOnInit(): void {
    this.notifications = this.notificationSerive.getNotifications();
  }

  selectNotification(id:number):void {
    this.notificationSerive.selectNotification(id);
    this.router.navigate([`/notifications/${id}`]);
  }
}
