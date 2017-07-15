import { Component, OnInit } from '@angular/core';

import { BlogService } from "../blog.service";
import { BlogPost } from "./blogPost.model";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  // blogPosts = [
  //   {
  //     title: "Lorem ipsum",
  //     url: "lorem-ipsum",
  //     date: "17 June 2017",
  //     previewText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  //     image: "http://wallpapercave.com/wp/n0FcaBH.jpg"
  //   },
  //   {
  //     title: "Ipsum Lorem",
  //     url: "ipsum-lorem",
  //     date: "16 June 2017",
  //     previewText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  //     image: "https://image.jimcdn.com/app/cms/image/transf/dimension=372x1024:format=jpg/path/s18122fe3bc485736/image/i648b858271624317/version/1495393615/image.jpg"
  //   }
  // ];
  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log('on init')
    this.blogService.getBlogPosts()
      .subscribe(
        (blogPosts => {
          this.blogPosts = blogPosts;
          console.log(blogPosts);
        })
      )
  }

}
