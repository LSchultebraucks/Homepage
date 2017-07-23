import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";

import { BlogPost } from "../../../blog/blogpost-list/blogPost.model";
import { AuthService } from "../../auth.service";
import { BlogPostService } from "../../../blog.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  blogGroup: FormGroup;
  blogPost: BlogPost = new BlogPost('', '', Date.now(), '', []);
  tags: string = '';

  constructor(private authService: AuthService, private blogPostService: BlogPostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let url = this.route.params.subscribe(params => {
      let url = params['url'];
      this.blogPostService.getBlogPost(url).subscribe(blogPost => {
        this.blogPost = blogPost;
        this.tags = this.blogPost.tags.toString();
      });
    });
    this.blogGroup = new FormGroup({
      title: new FormControl(),
      url : new FormControl(),
      date: new FormControl(),
      tags: new FormControl(),
      intro: new FormControl(),
      image: new FormControl(),
      template: new FormControl()
    });
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }

  onSubmit() {
    this.blogPost.tags = this.tags.split(' ');
    this.blogPostService.updateBlogPost(this.blogPost).subscribe((blogPost: BlogPost) => {
      this.router.navigateByUrl('/blog/' + blogPost.url);
    });
  }

}
