import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BlogPost} from "../blogPost.model";

@Component({
  selector: 'app-blogpost-preview',
  templateUrl: './blogpost-preview.component.html',
  styleUrls: ['./blogpost-preview.component.css']
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() blogPost: BlogPost;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickReadMore() {
    this.router.navigate(["/blog", this.blogPost.url]);
    window.scrollTo(0, 0);
  }

}
