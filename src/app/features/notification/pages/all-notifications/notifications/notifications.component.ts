import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { NotificationCardComponent } from "../../../components/notification-card/notification-card.component";
import { NotificationService } from '../../../service/notification-service/notification.service';
import { NavPanelComponent } from '../../../../../shared/components/nav-panel/nav-panel.component';
import { LocalStorageService } from '../../../../../core/services/localstorage.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationCardComponent, NavPanelComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications!:any[];
  messageBody: string | null = null;

  constructor(
    private notificationService: NotificationService,
    private lsService: LocalStorageService,
    private router: Router,
  ) {};


  ngOnInit(): void {
    // this.notifications = this.notificationService.getNotifications();
    this.notifications = this.lsService.getItem('notifications') || []
  }

  selectNotification(notification:any, index:number):void {
    // this.notificationService.selectNotification(id);
    this.lsService.setItem('selectedMessage', notification)
    this.router.navigate([`/notifications/${index}`]);
  }
}
