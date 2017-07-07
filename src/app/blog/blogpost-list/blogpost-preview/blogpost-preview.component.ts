import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogpost-preview',
  templateUrl: './blogpost-preview.component.html',
  styleUrls: ['./blogpost-preview.component.css']
})
export class BlogpostPreviewComponent implements OnInit {
  @Input() blogpost;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickReadMore() {
    this.router.navigate(["/blog", this.blogpost.url]);
    window.scrollTo(0, 0);
  }

}
