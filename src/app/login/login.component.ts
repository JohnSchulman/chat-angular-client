import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit() {
    // si le user est connecter on bascule vers le chat
   if(localStorage.getItem('user')) {
      this.router.navigate(['/'])
   }
  }

  onClick($event) {
    $event.preventDefault();

    fetch(`http://localhost:3000/user/login?email=${this.email.value}&password=${this.password.value}`, {
      method: 'get'
    }).then(r => r.json())
      .then(json => {
        if (!json.error) {
          // evite de faire F5. On creer l'objet et puis on redirige directement
          localStorage.setItem('user', JSON.stringify(json.user));
          this.router.navigate(['/']);
        } else  {
          alert(json.message);
        }
        console.log(json);
      })
  }
}
