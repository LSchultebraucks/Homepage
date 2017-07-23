import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Components
import { HomeComponent } from './home/home.component'
import { BlogComponent } from "./blog/blog.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { PrivacyPolicyComponent } from "./footer/privacy-policy/privacy-policy.component";
import { BlogPostComponent } from "./blog/blogpost-list/blog-post/blogpost.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./dashboard/login/login.component";
import { ManageBlogpostsComponent } from "./dashboard/manage-blogposts/manage-blogposts.component";
import { EditComponent}  from "./dashboard/manage-blogposts/edit/edit.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:url', component: BlogPostComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ManageBlogpostsComponent },
  { path: 'manage/edit/:url', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
