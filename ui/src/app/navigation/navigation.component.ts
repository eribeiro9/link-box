import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private navLinks: any = [{
    label: 'Conversations',
    route: '/'
  }, {
    label: 'Bookmarks',
    route: '/bookmarks'
  }, {
    label: 'Profile',
    route: '/profile'
  }];

  constructor (private router: Router) { }

  get activeRoute(): string {
    return this.router.url;
  }
}
