import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Components
import { HomeComponent } from './home/home.component'
import {BlogComponent} from "./blog/blog.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";
import {PrivacyPolicyComponent} from "./footer/privacy-policy/privacy-policy.component";
import {BlogPostComponent} from "./blog/blogpost-list/blog-post/blogpost.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:url', component: BlogPostComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
