import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api.services';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
    CardComponent,
    CarrelloComponent,

    LoginComponent,
    WishlistComponent,
    FooterComponent,
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
    NgbModule,
    CommonModule,
    NgbModalModule,
  ],
  providers: [BookService, CartService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
