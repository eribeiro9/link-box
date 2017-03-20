import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';
import { ConversationsService } from './conversations.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { MessageDetailsComponent } from './messages/message-details/message-details.component';
import { AddBookmarkDialogComponent } from './shared/add-bookmark-dialog/add-bookmark-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    ConversationsRoutingModule
  ],
  declarations: [
    ConversationsComponent,
    MessagesComponent,
    MessageDetailsComponent,
    AddBookmarkDialogComponent
  ],
  entryComponents: [
    AddBookmarkDialogComponent
  ],
  providers: [
    ConversationsService,
    MessagesService
  ],
  exports: [ConversationsComponent]
})
export class ConversationsModule { }
