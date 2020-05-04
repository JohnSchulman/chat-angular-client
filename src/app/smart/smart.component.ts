import {Component, Input, OnInit} from '@angular/core';
import {MessageComponent} from '../message/message.component';
import {PseudoGeneratorService} from '../pseudo-generator.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  @Input() appTitle: string;

  constructor(private pseudoGenerator: PseudoGeneratorService, private storeService: StoreService) {
    // localStorage permet de stocker des données temporairement sur le web
    // comme les sessions mais côté Front
    if (localStorage.getItem('userName') === null) {
      localStorage.setItem('userName', this.pseudoGenerator.generate(8));
    }
  }

  // cree des données en dure
  ngOnInit() {}

}
