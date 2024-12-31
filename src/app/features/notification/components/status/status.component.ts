import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  status = input<string | null>(null);
}
