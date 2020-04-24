import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public messages: Array<any> = [];

  constructor() { }

  public addMessage(message: object) {
    this.messages.push(message);
    console.log(this.messages);
  }
}
