import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-message',
  templateUrl: './left-message.component.html',
  styleUrls: ['./left-message.component.scss']
})
export class LeftMessageComponent implements OnInit {
  @Input() userName: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() avatar: string;
  @Input() content: string;
  // pas obliger de ecrire quelque chose
  // le serveur t'envoie la date du message qu'il t'envoie
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }
  writeUser(isUserName: boolean) {
    return isUserName ? this.userName : this.firstName + ' ' + this.lastName;
  }

}
