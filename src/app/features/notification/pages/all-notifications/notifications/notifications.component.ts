import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

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
  messageBody: string | null = null;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {};


  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
    this.route.queryParamMap.subscribe((params) => {
      this.messageBody = params.get('body');
      console.log(this.messageBody);
    });
  }

  selectNotification(id:number):void {
    this.notificationService.selectNotification(id);
    this.router.navigate([`/notifications/${id}`]);
  }
}
