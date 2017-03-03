import { Component } from '@angular/core';
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
  private errors = [];

  constructor (private registerService: RegisterService,
               private cookieService: CookieService,
               private router: Router) { }

  register(event: Event): void {
    event.preventDefault();
    this.errors = [];

    if (this.model.password !== this.model.verifyPassword) {
      this.errors.push('Password and Verify Password must be the same.');
      return;
    }

    this.registerService.register({
      username: this.model.username,
      email: this.model.email,
      password: this.model.password
    }).subscribe((res: any) => {
      this.cookieService.put('lnktkn', res.token);
      this.router.navigate(['/']);
    }, (err: any) => {
      this.errors.push(err.body.error);
    });
  }

  routeBack(): void {
    this.router.navigate(['/']);
  }
}
