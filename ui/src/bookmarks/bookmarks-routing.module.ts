import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';

const bookmarkRoutes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookmarkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookmarksRoutingModule { }
