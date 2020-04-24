import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() userName: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() avatar: string;
  @Input() content: string;
  // pas obliger de ecrire quelque chose
  // le serveur t'envoie la date du message qu'il t'envoie
  @Input() date: Date;

  @Input() side: string;

  constructor() { }

  ngOnInit() {
  }

  writeUser(isUserName: boolean) {
    return isUserName ? this.userName : this.firstName + ' ' + this.lastName;
  }

}
