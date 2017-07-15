export class BlogPost {
  title: string;
  url: string;
  date: number;
  intro: string;
  tags: string[];
  image?: any;
  template?: any;

  constructor(title: string, url: string, date: number, intro: string, tags: string[], image?: any, template?: any) {
    this.title = title;
    this.url = url;
    this.date = date;
    this.intro = intro;
    this.tags = tags;
    this.image = image;
    this.template = template;
  }
}
