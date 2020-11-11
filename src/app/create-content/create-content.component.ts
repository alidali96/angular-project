import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content;

  error?: string;

  constructor() {}

  ngOnInit(): void {}

  onAddNews(
    title: string,
    body: string,
    author: string,
    imgUrl: string,
    type: string,
    tags: string
  ) {
    this.newContent = {
      id: 0,
      title: title,
      body: body,
      author: author,
      imgUrl: imgUrl,
      type: type,
      tags: [tags],
    };

    let promiseToAddNews = new Promise((success, fail) => {
      if (body && title && author) {
        this.error = undefined;
        this.newContentEvent.emit(this.newContent);
        success(`News Added! - ${this.newContent.title}`);
      } else {
        this.error = `You need to add all required fields: ${
          title ? '' : 'title'
        } ${body ? '' : 'body'} ${author ? '' : 'author'}`;
        fail(this.error);
      }
    });

    promiseToAddNews
      .then((successMessage) => console.log(successMessage))
      .catch((failMessage) => console.log(failMessage));
  }
}
