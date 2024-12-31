import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  message = input<string | null>(null);
  date = input<string | null>(null);
  time = input<string | null>(null);

}
