import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { BlogPost } from "../blogPost.model";
import { BlogPostService } from "../../blog.service";

@Component({
  selector: 'app-blogpost',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  url: any;
  blogPost: BlogPost = new BlogPost("", "", Date.now(), "", []);

  constructor(private blogPostService: BlogPostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.params.subscribe(params => {
      this.url = params['url'];
      this.blogPostService.getBlogPost(this.url).subscribe(blogPost => {
        this.blogPost = blogPost;
        document.getElementById("inner-container").innerHTML = this.blogPost.template;
      });
    });
  }
}
