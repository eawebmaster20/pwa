import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

// local imports
import { NotificationCardComponent } from "../../../notification/components/notification-card/notification-card.component";
import { NavPanelComponent } from '../../../../shared/components/nav-panel/nav-panel.component';
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { Router } from '@angular/router';
import { WebSocketService } from '../../../../core/services/web-socket.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe, NotificationCardComponent, NavPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  displayDate = signal(new Date());
  isConnected:boolean = false;
  constructor(private lsService: LocalStorageService, private router: Router, public socketService: WebSocketService){}
  getNotificationsList(){
    return this.lsService.getItem('notifications')?.length
  }

  goToNotifications(){
    this.router.navigate(['/notifications']);
  }

  ngOnInit(): void {
    this.socketService.getConnectionStatus()
    .subscribe((status) => {
      this.isConnected = status;
      console.log('WebSocket connection status:', status ? 'Connected' : 'Disconnected');
    });
  }
  
}
