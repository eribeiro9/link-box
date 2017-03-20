import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

import { ApiService } from '../shared/services';

@Injectable()
export class AppService extends ApiService {
  private wakeUpUrl = this.apiUrl('/wakeup/');
  private user: any;

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
    this.http
      .get(this.wakeUpUrl)
      .map(this.parseResponse)
      .catch(this.handleError);
  }

  getUser(): any {
    return this.user;
  }

  hasToken(): boolean {
    let token = this.cookieService.get('lnktkn');
    return !!token;
  }
}
