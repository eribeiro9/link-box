import { Component, OnInit } from '@angular/core';

import { ConversationsService } from './conversations.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  private conversations: any = [];

  constructor(private conversationsService: ConversationsService) { }

  ngOnInit() {
    this.conversationsService.getConversations().subscribe((res: any) => {
      this.conversations = res.conversations.map((conversation) => {
        conversation.otherUser = conversation.participants.find(p => p._id !== res.userId);
        return conversation;
      });
    });
  }
}
