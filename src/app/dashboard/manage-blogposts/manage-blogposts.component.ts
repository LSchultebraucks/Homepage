import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BlogPostService } from "../../blog.service";
import { AuthService } from "../auth.service";

import { BlogPost } from "../../blog/blogpost-list/blogPost.model";

@Component({
  selector: 'app-manage-blogposts',
  templateUrl: './manage-blogposts.component.html',
  styleUrls: ['./manage-blogposts.component.css']
})
export class ManageBlogpostsComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogPostService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    this.blogService.getBlogPosts()
      .subscribe(
        (blogPosts => {
          this.blogPosts = blogPosts;
        })
      )
  }

  onClickEdit(url: string) {
    this.router.navigate(['/manage/edit/', url]);
  }

  onClickDelete(blogPost: BlogPost) {
    this.blogService.deleteBlogPost(blogPost).subscribe( () => {
        this.router.navigateByUrl('/manage');
      }
    )
  }

}
