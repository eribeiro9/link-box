import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiHelpers } from '../common/api-helpers';

@Injectable()
export class ConversationsService {
  private getConversationsUrl = ApiHelpers.url('/chat');

  constructor(private http: Http) { }

  getConversations(): Observable<any[]> {
    return this.http
      .get(this.registerUrl, ApiHelpers.headerOptions)
      .map(ApiHelpers.parseResponse)
      .catch(ApiHelpers.handleError);
  }
}
