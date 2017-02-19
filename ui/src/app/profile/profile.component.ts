import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor (private cookieService: CookieService,
               private router: Router) { }

  logout() {
    this.cookieService.remove('lnktkn');
    this.router.navigate(['/']);
  }
}
