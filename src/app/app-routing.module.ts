import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-donate', component: DonateComponent},
  { path: 'app-footer', component: FooterComponent},
  { path: 'app-home', component: HomeComponent},
  { path: 'app-ourteam', component: OurteamComponent },
  { path: 'app-partners', component:PartnersComponent},
  { path: 'app-projects', component: ProjectsComponent},
  { path: 'app-thankyou', component: ThankyouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
