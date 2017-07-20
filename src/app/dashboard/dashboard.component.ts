import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import {FormControl, FormGroup } from "@angular/forms";
import { BlogPost } from "../blog/blogpost-list/blogPost.model";
import { BlogPostService } from "../blog.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  blogGroup: FormGroup;
  blogPost: BlogPost = new BlogPost('', '', Date.now(), '', []);
  tags: string = '';

  constructor(private authService: AuthService, private blogPostService: BlogPostService, private router: Router) { }

  ngOnInit() {
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

  onClickPost() {
    this.blogPost.tags = this.tags.split(' ');
    this.blogPostService.addBlogPost(this.blogPost);
  }
}
