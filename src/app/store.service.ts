import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public messages: Array<any> = [];


  constructor() { }

  public addMessage(message: object) {
    // j'ai mis mon message dans la liste de message
    this.messages.push(message);
  }
}
