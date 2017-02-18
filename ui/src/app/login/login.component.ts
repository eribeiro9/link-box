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

  constructor (private loginService: LoginService,
               private cookieService: CookieService,
               private router: Router) { }

  login(event: Event) {
    event.preventDefault();
    this.loginService.login({
      username: this.model.username,
      password: this.model.password
    }).subscribe((res: any) => {
      console.log(res)
      this.cookieService.put('lnktkn', res.token);
      this.router.navigate(['/']);
    }, (err: any) => {
      console.error(err);
    });
  }

  routeBack(): void {
    this.router.navigate(['/']);
  }
}
