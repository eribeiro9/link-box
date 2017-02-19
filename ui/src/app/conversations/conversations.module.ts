import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ConversationsComponent } from './conversations.component';
import { ConversationsService } from './conversations.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [ConversationsComponent],
  providers: [ConversationsService],
  exports: [ConversationsComponent]
})
export class ConversationsModule { }
