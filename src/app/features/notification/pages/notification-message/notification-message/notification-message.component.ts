import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// local imports
import { MessagesComponent } from '../../../components/messages/messages.component';
import { NotificationService } from '../../../service/notification-service/notification.service';

@Component({
  selector: 'app-notification-message',
  standalone: true,
  imports: [RouterLink, MessagesComponent],
  templateUrl: './notification-message.component.html',
  styleUrl: './notification-message.component.scss'
})
export class NotificationMessageComponent {
  notification = this.notificationSerivce.selectedNotification();
  
  constructor(
    private notificationSerivce: NotificationService,
  ) {}
  
}
