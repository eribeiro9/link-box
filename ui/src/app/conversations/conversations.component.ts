import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConversationsService } from './conversations.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  private conversations: any = [];

  constructor(private conversationsService: ConversationsService,
              private router: Router) { }

  ngOnInit() {
    this.conversationsService.getConversations().subscribe((res: any) => {
      this.conversations = res.conversations.map((conversation) => {
        conversation.otherUser = conversation.participants.find(p => p._id !== res.userId);
        return conversation;
      });
    });
  }

  routeTo(convId: string) {
    this.router.navigate(['/conversation', convId]);
  }
}
