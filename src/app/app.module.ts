import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { NgxPopper } from 'angular-popper';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TechstackComponent } from './techstack/techstack.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    TechstackComponent,
    BookmarkComponent,
    QuotesComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
