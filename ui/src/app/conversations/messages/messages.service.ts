import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../common/api.service';

@Injectable()
export class MessagesService extends ApiService {
  private getConversationMessagesUrl = this.apiUrl('/chat/');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  getConversationMessages(conversationId: string): Observable<any> {
    return this.http
      .get(this.getConversationMessagesUrl + conversationId, this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
