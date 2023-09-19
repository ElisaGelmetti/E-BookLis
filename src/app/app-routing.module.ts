import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { AppComponent } from './app.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CardComponent } from './card/card.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'author/:authorId', component: AuthorInfoComponent }, // Rotta per le informazioni sull'autore
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
