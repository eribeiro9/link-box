import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';
import { ConversationsService } from './conversations.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { MessageDetailsComponent } from './messages/message-details/message-details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    ConversationsRoutingModule
  ],
  declarations: [
    ConversationsComponent,
    MessagesComponent,
    MessageDetailsComponent
  ],
  providers: [
    ConversationsService,
    MessagesService
  ],
  exports: [ConversationsComponent]
})
export class ConversationsModule { }
