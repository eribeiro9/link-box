import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './landing/landing.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ConversationsModule } from './conversations/conversations.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    LandingModule,
    RegisterModule,
    LoginModule,
    ConversationsModule,
    BookmarksModule,
    ProfileModule
  ],
  providers: [
    AppService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
