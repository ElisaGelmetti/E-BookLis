import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,

    LoginComponent,
    CardComponent,
    BookDetailsComponent,
    CarrelloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
