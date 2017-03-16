import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BookmarksComponent } from './bookmarks.component';
import { BookmarksService } from './bookmarks.service';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BookmarksRoutingModule
  ],
  declarations: [
    BookmarksComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [
    BookmarksService
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
