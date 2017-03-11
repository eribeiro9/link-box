import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-start-conv-dialog',
  templateUrl: './start-conv-dialog.component.html',
  styleUrls: ['./start-conv-dialog.component.css']
})
export class StartConvDialogComponent {
  constructor(private dialogRef: MdDialogRef<StartConvDialogComponent>) { }
}
