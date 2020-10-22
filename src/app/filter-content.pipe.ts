import { Content } from './helper-files/content-interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], filterType?: string): Content[] {
    return filterType ? contentList.filter(content => content.type == filterType) : contentList;
  }

}
