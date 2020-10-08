import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 1,
      author: "Ali",
      title: "Angular",
      body: "Article Body",
      imgUrl: "https://www.stclaircollege.ca/sites/default/files/styles/article_images/public/articles/2020-09/20200904_130631%281%29.jpg",
    });
   }

  ngOnInit(): void {
  }

}
