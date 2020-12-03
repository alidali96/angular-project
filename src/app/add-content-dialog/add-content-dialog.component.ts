import { Content } from '../helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss'],
})
export class AddContentDialogComponent implements OnInit {
  newContent: Content;
  constructor(public dialogRef: MatDialogRef<AddContentDialogComponent>) {
    this.newContent = {
      id: 0,
      title: '',
      body: '',
      author: '',
      imgUrl: '',
      type: '',
      tags: [],
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
