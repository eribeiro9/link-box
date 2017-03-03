import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private model = {
    username: '',
    password: ''
  };
  private errors = [];

  constructor (private loginService: LoginService,
               private cookieService: CookieService,
               private router: Router) { }

  login(event: Event) {
    event.preventDefault();
    this.errors = [];
    this.loginService.login({
      username: this.model.username,
      password: this.model.password
    }).subscribe((res: any) => {
      this.cookieService.put('lnktkn', res.token);
      this.router.navigate(['/']);
    }, (err: any) => {
      this.errors.push('Invalid credentials.');
    });
  }

  routeBack(): void {
    this.router.navigate(['/']);
  }
}
