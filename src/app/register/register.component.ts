import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  avatar: FormControl = new FormControl('');
  first_name: FormControl = new FormControl('');
  last_name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  errorMessage = '';

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }

  onClick($event){
    $event.preventDefault();
    fetch(`http://localhost:3000/user/register?`
      + `first_name=${this.first_name.value}&last_name=${this.last_name.value}&email=${this.email.value}`
      + `&password=${this.password.value}`, {
      method: 'get'
    }).then(r => r.json())
      .then(json => {
        if(!json.error){
          this.router.navigate(['/login']);
        }
        else{
          this.errorMessage = json.message;
        }
        console.log(json);
      })
  }
}



  //).then(r => r.json())



