import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiHelpers } from '../common/api-helpers';

@Injectable()
export class LoginService {
  private loginUrl = ApiHelpers.url('/auth/login');

  constructor(private http: Http) { }

  login(data): Observable<string[]> {
    return this.http
      .post(this.loginUrl, JSON.stringify(data), ApiHelpers.headerOptions)
      .map(ApiHelpers.parseResponse)
      .catch(ApiHelpers.handleError);
  }
}
