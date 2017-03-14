import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BookmarksComponent } from './bookmarks.component';
import { BookmarksService } from './bookmarks.service';
import { BookmarksRoutingModule } from './bookmarks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BookmarksRoutingModule
  ],
  declarations: [
    BookmarksComponent
  ],
  providers: [
    BookmarksService
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
