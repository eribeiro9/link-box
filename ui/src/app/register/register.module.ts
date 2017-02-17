import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [RegisterComponent],
  providers: [
    RegisterService,
    CookieService
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
