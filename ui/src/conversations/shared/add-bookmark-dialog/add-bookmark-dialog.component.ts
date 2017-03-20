import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-bookmark-dialog',
  templateUrl: './add-bookmark-dialog.component.html',
  styleUrls: ['./add-bookmark-dialog.component.css']
})
export class AddBookmarkDialogComponent {
  constructor(private dialogRef: MdDialogRef<AddBookmarkDialogComponent>) { }
}
