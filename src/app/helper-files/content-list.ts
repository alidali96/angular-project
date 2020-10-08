import { Content } from './../helper-files/content-interface';

export class ContentList {
  private _contents: Content[] = [];
  get contenst(): Content[] {
    return this._contents;
  }
  addContent(content: Content): void {
    this._contents.push(content);
  }
  length(): number {
    return this._contents.length;
  }

  showContent(index: number) : string {
      let content = this._contents[index];
      if (content == null) {
          return `<h4 class="error" style="color:red;">Error. There is no content at ${index}.</h4>`;
      }
      return `<h2>Title: ${content.title}</h2><h4>Author: ${content.author}</h4><img src="${content.imgUrl}"/><p>${content.body}</p>`;
  }
}
