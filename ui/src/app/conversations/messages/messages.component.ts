import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private messages: any[] = [];

  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let conversationId = params['convId'];
      this.messagesService.getConversationMessages(conversationId).subscribe((res) => {
        this.messages = res.conversation;
        console.log(this.messages)
      }, (err) => {
        console.error(err);
      });
    });
  }
}
