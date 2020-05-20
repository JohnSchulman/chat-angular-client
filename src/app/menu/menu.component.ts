import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() logged: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  disconnect($event) {
    // ca stop l'evement
    $event.preventDefault();
    // on supprime la clé et donc l'objet de l'utimsateur aussi
    localStorage.removeItem('user');
    // redirection de la page
    this.router.navigate(['/login']);
  }

}
