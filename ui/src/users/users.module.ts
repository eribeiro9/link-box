import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { StartConvDialogComponent } from './start-conv-dialog/start-conv-dialog.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    StartConvDialogComponent
  ],
  entryComponents: [
    StartConvDialogComponent
  ],
  providers: [
    UsersService
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
