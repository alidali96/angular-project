import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT_LIST } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}

  createDb(): object {
    const content = CONTENT_LIST;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((content) => content.id)) + 1
      : 2000;
  }
}
