import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
