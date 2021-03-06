import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { MessagesService } from './messages.service';
import { AddBookmarkDialogComponent } from '../shared/add-bookmark-dialog/add-bookmark-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private conversationId: any;
  private participant: string = '';
  private messages: any[] = [];
  private showPane: boolean = false;
  private model: any = {
    link: '',
    description: ''
  };

  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.conversationId = params['convId'];
      this.messagesService.getConversationMessages(this.conversationId).subscribe((res) => {
        this.participant = res.participant;
        this.messages = res.conversation.map((msg) => {
          msg.isSelf = msg.author._id === res.userId;
          return msg;
        });
      }, (err) => {
        console.error(err);
      });
    });
  }

  addBookmark(msg) {
    let dialogRef = this.dialog.open(AddBookmarkDialogComponent, {
      data: msg
    });
    dialogRef.afterClosed().subscribe(bookmark => {
      if (bookmark) {
        let tags = [];
        this.messagesService.newBookmark(bookmark.link, bookmark.description, tags);
      }
    });
  }

  goToDetails(msgId: string) {
    this.router.navigate(['/message', msgId]);
  }

  goToMore() { }

  togglePane() {
    this.showPane = !this.showPane;
  }

  send(event) {
    event.preventDefault();
    this.messagesService.sendMessage(this.conversationId, this.model.link, this.model.description).subscribe((res) => {
      this.showPane = false;
      this.messages.push({
        link: this.model.link,
        description: this.model.description
      });
      this.model = {
        link: '',
        description: ''
      };
    }, (err) => {
      console.log(err);
    });
  }
}
