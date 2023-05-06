import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BooksListComponent,
    AboutComponent,
    DonateComponent,
    FooterComponent,
    HomeComponent,
    OurteamComponent,
    PartnersComponent,
    ProjectsComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
