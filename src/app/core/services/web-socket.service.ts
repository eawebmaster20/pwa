import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private readonly SOCKET_URL = 'localhost:3000'; // Update with your production URL if needed
  private socket: Socket;
  private connectionStatus$ = new BehaviorSubject<boolean>(false); // Observable to track connection status

  constructor() {
    // Initialize the socket with WebSocket transport
    this.socket = io(this.SOCKET_URL);

    // Listen for connection events
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server:', this.socket.id);
      this.connectionStatus$.next(true);
    });

    // Listen for disconnection events
    this.socket.on('disconnect', (reason) => {
      console.warn('Disconnected from WebSocket server:', reason);
      this.connectionStatus$.next(false);
    });

    // Handle connection errors
    this.socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error.message);
      this.connectionStatus$.next(false);
    });
  }

  // Subscribe to connection status changes
  getConnectionStatus() {
    return this.connectionStatus$.asObservable();
  }

  // Listen for an event from the server
  on(event: string, callback: (data: any) => void): void {
    this.socket.on(event, callback);
  }

  // Emit an event to the server
  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  // Disconnect the socket
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      console.log('WebSocket disconnected');
    }
  }
}

// import { Injectable } from '@angular/core';
// import { io, Socket } from 'socket.io-client';


// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {
//   connectionStatus:boolean = false;
//   socket: Socket = io('localhost:3000', {
//     transports: ['websocket'] ,// Force WebSocket transport only
//     autoConnect: true
//   });
//   constructor() { 
//     // this.socket = io('node-socketio-production-cf7a.up.railway.app');
//   }

//   on(event: string, callback: (data: any) => void): void {
//     this.socket.on(event, callback);
//   }

//   // Emit an event
//   emit(event: string, data: any): void {
//     this.socket.emit(event, data);
//   }

//   // Disconnect the socket
//   disconnect(): void {
//     this.socket.disconnect();
//   }


// }
