import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { MessageDetailsComponent } from './messages/message-details/message-details.component';

const chatRoutes: Routes = [
  { path: 'conversation/:convId', component: MessagesComponent },
  { path: 'message/:msgId', component: MessageDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConversationsRoutingModule { }
