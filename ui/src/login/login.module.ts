import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService,
    CookieService
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
