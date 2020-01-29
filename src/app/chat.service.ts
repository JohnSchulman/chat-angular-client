import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    // creer la connexion
    this.socket = io(this.url);
  }
  sendMessage(chanel: string, message: string) {
    this.socket.emit(chanel, message);
  }
  on(channel: string, event) {
    this.socket.on(channel, event);
  }
}
