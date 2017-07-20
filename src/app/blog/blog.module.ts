import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components;
import { BlogComponent } from "./blog.component";
import { BlogPostComponent } from "./blogpost-list/blog-post/blogpost.component";
import { BlogPostPreviewComponent } from "./blogpost-list/blogpost-preview/blogpost-preview.component";
import { BlogpostListComponent } from "./blogpost-list/blogpost-list.component";

// Services

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogPostPreviewComponent,
    BlogpostListComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class BlogModule {

}
