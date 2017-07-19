export class BlogPost {
  title: string;
  url: string;
  date: number;
  intro: string;
  tags: string[];
  image?: string;
  template?: string;

  private MONTH = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];

  constructor(title: string, url: string, date: number, intro: string, tags: string[], image?: string, template?: string) {
    this.title = title;
    this.url = url;
    this.date = date;
    this.intro = intro;
    this.tags = tags;
    this.image = image;
    this.template = template;
  }

  parseDate(ms: Date): string {
    let date = new Date(ms);
    return date.getUTCDate() + ". " + this.MONTH[date.getMonth()] + " " + date.getFullYear();
  }
}
