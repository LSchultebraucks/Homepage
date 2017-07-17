import { Component, OnInit } from '@angular/core';

import { BlogPostService } from "../blog.service";
import { BlogPost } from "./blogPost.model";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPosts: BlogPost[];

  constructor(private blogService: BlogPostService) { }

  ngOnInit() {
    this.blogService.getBlogPosts()
      .subscribe(
        (blogPosts => {
          this.blogPosts = blogPosts;
        })
      )
  }

}
