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
      // Not sure how to render HTML
      if (content == null) {
          return `<p>There is no content at ${index}.</p>`;
      }
      return `<h2>${content.title}</h2><img src="${content.imgUrl}"/><p>${content.body}</p>`;
    // let test = "TEST";
    // return "<div [innerHTML]=\"test\"></div>";
  }
}
