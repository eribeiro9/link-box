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
    this.conversationsService.getConversations().subscribe((conversations) => {
      this.conversations = conversations;
    });
  }
}
