import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
    LoginComponent,
    CardComponent,
    BookDetailsComponent,
    CarrelloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // Importa il modulo RouterModule e configura le route
      { path: 'search', component: SearchComponent }, // Aggiungi una route per il componente di ricerca
      // ... altre route se necessario
    ]),
    FormsModule,
    NgbCarouselModule,
    NgFor,
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
