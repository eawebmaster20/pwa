import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationCardComponent } from "../../../notification/components/notification-card/notification-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NotificationCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
