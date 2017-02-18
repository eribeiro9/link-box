import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsComponent } from './conversations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConversationsComponent],
  exports: [ConversationsComponent]
})
export class ConversationsModule { }
