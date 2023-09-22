import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { CardComponent } from './pages/card/card.component';

import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';

import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wishlist', component: WishlistComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
