import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public static socket = null;
  private url = 'http://localhost:3000';

  constructor() {
    // creer la connexion
    if (ChatService.socket === null) {
      ChatService.socket = io(this.url);
    }
  }
  // "emit" means on envoie
  sendMessage(chanel: string, message: string) {
    ChatService.socket.emit(chanel, message);
  }

  // "on" means on recoit
  on(channel: string, event) {
      ChatService.socket.on(channel, event);
  }
}
