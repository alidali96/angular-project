import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { CONTENT_LIST } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private messageService: MessageService) {}

  // synchronous
  getContents(): Content[] {
    return CONTENT_LIST;
  }

  // asynchronous
  getContentsObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved');
    return of(CONTENT_LIST);
  }
}
