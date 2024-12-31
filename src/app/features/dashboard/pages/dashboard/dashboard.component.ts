import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

// local imports
import { NotificationCardComponent } from "../../../notification/components/notification-card/notification-card.component";
import { ThemeService } from '../../../../core/services/theme/theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe, NotificationCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  displayDate = signal(new Date());

  constructor(
    private themeService: ThemeService,
  ) {}

  changeTheme() {
    this.themeService.toggleTheme();
  }

}
