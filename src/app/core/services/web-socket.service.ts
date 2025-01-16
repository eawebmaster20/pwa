import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: Socket = io('https://node-socketio-production-cf7a.up.railway.app', {
    transports: ['websocket'] // Force WebSocket transport only
  });
  constructor() { 
    this.socket = io('node-socketio-production-cf7a.up.railway.app');
  }

  on(event: string, callback: (data: any) => void): void {
    // console.log('hi')
    this.socket.on(event, callback);
  }

  // Emit an event
  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  // Disconnect the socket
  disconnect(): void {
    this.socket.disconnect();
  }


// // stomp
//   activate(): void {
//     this.client.activate();
//     console.log(this.client.connected)
//   }

//   subscribe(topic: string, callback: (message: Message) => void): void {
//     this.client.onConnect = () => {
//       console.log('STOMP connected');
//       this.client.subscribe(topic, callback);
//     };
//   }

//   publish(destination: string, body: any): void {
//     this.client.publish({
//       destination,
//       body: JSON.stringify(body),
//     });
//   }

//   deactivate(): void {
//     this.client.deactivate();
//   }
}
