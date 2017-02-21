import { Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

export class ApiService {
  constructor(protected cookieService: CookieService) { }

  apiUrl(route: string) {
    return environment.apiBaseUrl + route;
  }

  getHeaderOptions(sendToken: boolean) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if (sendToken) {
      headers =  new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.cookieService.get('lnktkn')
      });
    }
    return new RequestOptions({ headers: headers });
  }

  parseResponse(res: Response) {
    let body = res.json();
    return body || { };
  }

  handleError(error: any) {
    let errMsg = (error.message)
                  ? error.message
                  : error.status
                    ? `${error.status} - ${error.statusText}`
                    : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
