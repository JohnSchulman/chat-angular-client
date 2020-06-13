import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // je catch la valeur
  @Input() logged: boolean;
  connectedUser = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'));
      this.connectedUser = user.first_name + ' ' + user.last_name;
    }
  }

  disconnect($event) {
    // ca stop l'evement pour ne pas changer de page
    $event.preventDefault();
    // on supprime la clé et donc l'objet de l'utimsateur aussi
    localStorage.removeItem('user');
    // redirection de la page
    this.router.navigate(['/login']);
  }

}
