import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  @Input() appTitle: string;

  constructor(private storeService: StoreService, private router: Router) {

  }

  // cree des données en dure
  ngOnInit() {
    if (!localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
  }

}
