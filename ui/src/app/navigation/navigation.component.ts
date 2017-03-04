import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private navLinks: any = [{
    name: 'conversations',
    icon: 'forum',
    route: '/'
  }, {
    name: 'bookmarks',
    icon: 'bookmark',
    route: '/bookmarks'
  }, {
    name: 'profile',
    icon: 'account_circle',
    route: '/profile'
  }];

  constructor (private router: Router,
               private cookieService: CookieService) { }

  get activeRoute(): string {
    return this.router.url;
  }

  logout() {
    this.cookieService.remove('lnktkn');
    this.router.navigate(['/']);
  }
}
