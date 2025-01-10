import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// local imports
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss'
})
export class NavPanelComponent {
  
    constructor(
      private themeService: ThemeService,
    ) {}
  
    changeTheme() {
      this.themeService.toggleTheme();
    }
}
