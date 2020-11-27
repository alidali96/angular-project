import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  contentList: Content[];

  constructor(private contentService: ContentService) {}

  searchContent(search: String): void {
    let exist = this.contentList.find(
      (content) => content.title.toLowerCase() == search.toLowerCase()
    );
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }

  addContentToList(newContentFromChild: Content): void {
    this.contentList.push(newContentFromChild);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  updateContentInList(response: string) {
    console.log(response);
    this.getContentList();
  }

  getContentList() {
    // subscribe to the content service
    this.contentService.getContentsObs().subscribe((content) => {
      this.contentList = content;
    });
  }

  ngOnInit(): void {
    this.getContentList();
  }
}
