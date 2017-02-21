import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';

@Injectable()
export class LoginService extends ApiService {
  private loginUrl = this.apiUrl('/auth/login');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  login(data): Observable<string[]> {
    return this.http
      .post(this.loginUrl, JSON.stringify(data), this.getHeaderOptions(false))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
