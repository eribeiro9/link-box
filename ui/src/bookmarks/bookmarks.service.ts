import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../shared/services';

@Injectable()
export class BookmarksService extends ApiService {
  private bookmarksUrl = this.apiUrl('/users/bookmarks');

  constructor(protected cookieService: CookieService,
              private http: Http) {
    super(cookieService);
  }

  getBookmarks(): Observable<any[]> {
    return this.http
      .get(this.bookmarksUrl, this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }

  deleteBookmark(bookmarkId: string) {
    return this.http
      .delete(`${this.bookmarksUrl}/${bookmarkId}`, this.getHeaderOptions(true))
      .map(this.parseResponse)
      .catch(this.handleError);
  }
}
