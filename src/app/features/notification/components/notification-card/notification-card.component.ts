import { Component, input } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss'
})
export class NotificationCardComponent {
  title = input<string | null>(null);
  description = input<string | null>(null);
  time = input<string | null>(null);
  isRead = input<boolean>(false);
}
