import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';

@Injectable()
export class RegisterService extends ApiService {
  private registerUrl = this.apiUrl('/auth/register');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  register(data): Observable<string[]> {
    return this.http
      .post(this.registerUrl, JSON.stringify(data), this.getHeaderOptions(false))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
