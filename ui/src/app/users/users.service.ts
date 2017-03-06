import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';

@Injectable()
export class UsersService extends ApiService {
  private getUsersUrl = this.apiUrl('/users');
  private newConversationUrl = this.apiUrl('/chat');

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

  newConversation(userId: string): Observable<any[]> {
    let data = {
      recipient: userId
    };
    return this.http
      .post(this.newConversationUrl, JSON.stringify(data), this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
