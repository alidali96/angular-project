import { Content } from '../helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  constructor() {}

  onImageClick(id: number) {
    console.log(`Image clicked: ${id}`);
  }
  ngOnInit(): void {}
}
