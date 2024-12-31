import { Component, input } from '@angular/core';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [StatusComponent],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss'
})
export class NotificationCardComponent {
  title = input<string | null>(null);
  description = input<string | null>(null);
  time = input<string | null>(null);
  isRead = input<boolean>(false);
  status = input<string | null>(null);
}
