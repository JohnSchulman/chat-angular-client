import {Component, Input, OnInit} from '@angular/core';
import {MessageComponent} from '../message/message.component';
import {PseudoGeneratorService} from '../pseudo-generator.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  private pseudoGenerator: PseudoGeneratorService;

  @Input() appTitle: string;
  // tu cree un tableau d'un objet en particulier
  messages: MessageComponent[] = [];

  constructor(pseudoGenerator: PseudoGeneratorService) {
    this.pseudoGenerator = pseudoGenerator;

    if (localStorage.getItem('userName') === null) {
      localStorage.setItem('userName', this.pseudoGenerator.generate(8));
    }
  }

  // cree des données en dure
  ngOnInit() {
    const component = new MessageComponent();
    component.date = new Date();
    component.avatar = 'assets/avatar.jpg';
    component.userName = 'totojbwdcihbs<cvdbxwhbcvhsdcswc<sdwcw<c';
    component.firstName = 'test';
    component.lastName = 'test2';
    component.content = `bonjour
      message de test`;
    component.side = 'right';
    // pour ajouter dans un tableau
    this.messages.push(component);
    console.log(this.messages.length);
  }

}
