import {Component, Input, OnInit} from '@angular/core';
import {RightMessageComponent} from '../right-message/right-message.component';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  @Input() appTitle: string;
  // tu cree un tableau d'un objet en particulier
  messages: RightMessageComponent[] = [];

  constructor() { }

  // cree des données en dure
  ngOnInit() {
    const component = new RightMessageComponent();
    component.date = new Date();
    component.avatar = 'assets/avatar.jpg';
    component.userName = 'toto';
    component.firstName = 'test';
    component.lastName = 'test2';
    component.content = `bonjour
      message de test`;
    // pour ajouter dans un tableau
    this.messages.push(component);
  }

}
