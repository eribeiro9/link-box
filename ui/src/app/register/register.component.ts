import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private model = {
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
  };

  constructor (private registerService: RegisterService,
               private cookieService: CookieService,
               private router: Router) { }

  register() {
    this.registerService.register({
      username: this.model.username,
      email: this.model.email,
      password: this.model.password
    }).subscribe((res: any) => {
      this.cookieService.put('lnktkn', res.token);
      this.router.navigate(['/']);
    }, (err: any) => {
      console.error(err);
    });
  }
}
