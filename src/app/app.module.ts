import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/enviroments/enviroment.development';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './pages/card/card.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/footer/search/search.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { WishlistComponent } from './pages/libreria/wishlist.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './api.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
