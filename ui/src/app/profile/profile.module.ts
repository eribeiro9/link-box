import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [ProfileComponent],
  providers: [CookieService],
  exports: [ProfileComponent]
})
export class ProfileModule { }
