import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CardComponent } from './card/card.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book-detail', component: BookDetailsComponent },
  {
    path: 'book-details/:title/:authors/:publisher/:publishedDate/:description',
    component: BookDetailsComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
