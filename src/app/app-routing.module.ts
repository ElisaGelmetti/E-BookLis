import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

// import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CardComponent } from './card/card.component';
import { AuthGuard } from './auth/auth.guard';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'carrello', component: CarrelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
