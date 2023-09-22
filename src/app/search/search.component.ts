import { ApiService } from './../api.services';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { timer, throwError } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  [x: string]: any;
  searchTerm: string = '';
  searchResults: any[] = []; // Array per i risultati della ricerca
  cart: any[] = []; // Array per i libri nel carrello
  showDescription = false; // Aggiungi questa linea per dichiarare showDescription
  books: any = [];
  cartItems: any[] = []; // Inizializza un array per i libri nel carrello
  wishlistItems: any[] = []; //Aggiungi alla wishlist
  constructor(private http: HttpClient, private ApiService: ApiService) {}

  searchBooks() {
    if (!this.searchTerm) {
      return; // Esci se searchTerm è vuoto o non definito
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      // Ricevi i risultati della ricerca
      this.searchResults = data.items || [];
      console.log('Ricerca libri per:', this.searchTerm);
    });
  }

  ///////////////////////////////TROPPE CHIAMATE//////////////////
  // searchBooks() {
  //   if (!this.searchTerm) {
  //     return;
  //   }

  //   const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`;

  //   this.http
  //     .get(apiUrl)
  //     .pipe(
  //       retryWhen((errors) => {
  //         return errors.pipe(
  //           mergeMap((error, index) => {
  //             if (index < 3 && error.status === 429) {
  //               // Attendi prima di ritentare la richiesta
  //               const retryDelayMs = 1000 * (index + 1); // Ritenta con un ritardo crescente
  //               return timer(retryDelayMs);
  //             }
  //             return throwError(error);
  //           })
  //         );
  //       })
  //     )
  //     .subscribe(
  //       (data: any) => {
  //         // Ricevi i risultati della ricerca
  //         this.searchResults = data.items || [];
  //         console.log('Ricerca libri per:', this.searchTerm);
  //       },
  //       (error) => {
  //         console.error('Errore nella ricerca libri:', error);
  //         // Puoi gestire l'errore qui, ad esempio, mostrando un messaggio all'utente
  //       }
  //     );
  // }
  addToCart(book: any) {
    this.cartItems.push(book);
    localStorage.setItem('usercarrello', JSON.stringify(book));
    console.log('Aggiunto nella Wishlist:', book.volumeInfo.title);
    console.log('aiuto', this.cartItems);
  }

  addToWishlist(book: any) {
    this.wishlistItems.push(book);
    localStorage.setItem('wishlist', JSON.stringify(book));
    console.log('Aggiunto alla wishlist:', book.volumeInfo.title);
  }
}
