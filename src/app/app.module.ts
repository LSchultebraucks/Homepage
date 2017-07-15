import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { BlogpostListComponent } from './blog/blogpost-list/blogpost-list.component';
import { BlogPostPreviewComponent } from './blog/blogpost-list/blogpost-preview/blogpost-preview.component';
import { BlogPostComponent } from './blog/blogpost-list/blog-post/blogpost.component';

// Services
import { ErrorService } from "./errors/error.service"
import { BlogService } from "./blog/blog.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BlogComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    BlogpostListComponent,
    BlogPostPreviewComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ErrorService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
