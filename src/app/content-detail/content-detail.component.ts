import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit {
  id: number;
  content: Content;
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.contentService.getContent(this.id).subscribe((detailContent) => {
        this.content = detailContent;
      });
    });
  }
}
