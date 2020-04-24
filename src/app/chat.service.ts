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
  // "emit" means on envoie
  sendMessage(socketId: any, chanel: string, message: string) {
    this.socket.emit(chanel, {id: socketId, message});
  }

  // "on" means on recoit
  on(channel: string, event) {
    this.socket.on(channel, event);
  }
}
