import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

let headers = new Headers({ 'Content-Type': 'application/json' });

export const ApiHelpers: any = {
  headerOptions: new RequestOptions({ headers: headers }),

  url: function(route: string) {
    return environment.apiBaseUrl + route;
  },

  parseResponse: function(res: Response) {
    let body = res.json();
    console.log(body)
    return body || { };
  },

  handleError: function(error: any) {
    let errMsg = (error.message)
                  ? error.message
                  : error.status
                    ? `${error.status} - ${error.statusText}`
                    : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
};
