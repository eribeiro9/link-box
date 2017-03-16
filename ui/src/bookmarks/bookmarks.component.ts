import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { BookmarksService } from './bookmarks.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  private bookmarks: any = [];

  constructor(private bookmarksService: BookmarksService,
              private router: Router,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.bookmarksService.getBookmarks().subscribe((res: any) => {
      this.bookmarks = res.bookmarks;
    });
  }

  edit(bookmarkId) { }

  delete(bookmarkId) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(del => {
      if (del) {
        this.bookmarksService.deleteBookmark(bookmarkId).subscribe((res: any) => {
          this.bookmarks = this.bookmarks.filter(b => b._id !== bookmarkId);
        });
      }
    });
  }
}
