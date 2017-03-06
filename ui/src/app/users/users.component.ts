import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { UsersService } from './users.service';
import { StartConvDialogComponent } from './start-conv-dialog/start-conv-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: any = [];

  constructor(private usersService: UsersService,
              private convDialog: MdDialog) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: any) => {
      let conversations = res.conversations.map((conversation) => {
        return conversation.participants.find((participant) => {
          return participant._id !== res.userId;
        })._id;
      });
      this.users = res.users.map((user) => {
        if (user._id === res.userId) {
          user.isSelf = true;
        } else {
          user.isConversation = conversations.indexOf(user._id) >= 0;
        }
        return user;
      });
    });
  }

  startConversation(user: any) {
    let dialogRef = this.convDialog.open(StartConvDialogComponent, {
      data: user.username
    });
    dialogRef.afterClosed().subscribe(startConv => {
      if (startConv) {
        this.usersService.newConversation(user._id).subscribe((res: any) => {
          this.users.map((u) => {
            if (user._id === u._id) {
              u.isConversation = true;
            }
            return u;
          });
        });
      }
    });
  }
}
