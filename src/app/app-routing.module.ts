import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TechstackComponent } from './techstack/techstack.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'techstack', component: TechstackComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
