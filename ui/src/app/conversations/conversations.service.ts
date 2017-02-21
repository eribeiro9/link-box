import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';

@Injectable()
export class ConversationsService extends ApiService {
  private getConversationsUrl = this.apiUrl('/chat');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  getConversations(): Observable<any[]> {
    return this.http
      .get(this.getConversationsUrl, this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
