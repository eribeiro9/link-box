import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookmarksService } from './bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  private bookmarks: any = [];

  constructor(private bookmarksService: BookmarksService,
              private router: Router) { }

  ngOnInit() {
    this.bookmarksService.getBookmarks().subscribe((res: any) => {
      this.bookmarks = res.bookmarks;
    });
  }
}
