import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AppService {
  private user: any;

  constructor(private cookieService: CookieService) { }

  getUser(): any {
    return this.user;
  }

  hasToken(): boolean {
    let token = this.cookieService.get('lnktkn');
    return !!token;
  }
}
