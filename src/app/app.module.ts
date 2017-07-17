import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import {BlogModule} from "./blog/blog.module";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';

// Services
import { ErrorService } from "./errors/error.service"
import { BlogPostService } from "./blog/blog.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { AuthService } from "./dashboard/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BlogModule,
    NgbModule.forRoot()
  ],
  providers: [ErrorService, BlogPostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
