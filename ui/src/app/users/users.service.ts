import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';

@Injectable()
export class UsersService extends ApiService {
  private getUsersUrl = this.apiUrl('/users');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  getUsers(): Observable<any[]> {
    return this.http
      .get(this.getUsersUrl, this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
