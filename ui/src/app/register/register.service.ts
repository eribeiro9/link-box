import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiHelpers } from '../common/api-helpers';

@Injectable()
export class RegisterService {
  private registerUrl = ApiHelpers.url('/auth/register');

  constructor(private http: Http) { }

  register(data): Observable<string[]> {
    return this.http
      .post(this.registerUrl, JSON.stringify(data), ApiHelpers.headerOptions)
      .map(ApiHelpers.parseResponse)
      .catch(ApiHelpers.handleError);
  }
}
