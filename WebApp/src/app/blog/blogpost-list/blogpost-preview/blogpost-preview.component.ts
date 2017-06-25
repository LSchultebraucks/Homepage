import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blogpost-preview',
  templateUrl: './blogpost-preview.component.html',
  styleUrls: ['./blogpost-preview.component.css']
})
export class BlogpostPreviewComponent implements OnInit {
  @Input() blogpost;

  constructor() { }

  ngOnInit() {
  }

}
