export class BlogPost {
  title: string;
  url: string;
  date: string;
  intro: string;
  tags: string[];
  image?: any;
  template?: any;

  private MONTH = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];

  constructor(title: string, url: string, date: number, intro: string, tags: string[], image?: any, template?: any) {
    this.title = title;
    this.url = url;
    this.date = this.parseDate(new Date(date));
    this.intro = intro;
    this.tags = tags;
    this.image = image;
    this.template = template;
  }

  private parseDate(date: Date): string {
    return date.getUTCDate() + ". " + this.MONTH[date.getMonth()] + " " + date.getFullYear();
  }
}
