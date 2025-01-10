import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

// local imports
import { NotificationCardComponent } from "../../../notification/components/notification-card/notification-card.component";
import { NavPanelComponent } from '../../../../shared/components/nav-panel/nav-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe, NotificationCardComponent, NavPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  displayDate = signal(new Date());
  
}
