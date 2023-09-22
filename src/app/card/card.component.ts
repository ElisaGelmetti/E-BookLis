import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // Dichiarazione di variabili di classe
  wishlistItems: any[] = [];
  @Input() book: any = { showDescription: false };
  genres: { [key: string]: { booksWithDescription: any[] } } = {
    horror: { booksWithDescription: [] },
    fantasy: { booksWithDescription: [] },
    avventura: { booksWithDescription: [] },
  };
  cartItems: any[] = [];
  selectedBook: any;
  showDetailsAlert: boolean = false;
  descriptionsMissing: boolean = false;
  carrelloService: any;
  carrelloItems: any;
  cartResults: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  // Funzione per caricare libri da una fonte esterna per un genere specifico
  loadBooks(genre: string) {
    this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=5`
      )
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          // Estrai informazioni sui libri e controlla se ci sono descrizioni mancanti
          this.genres[genre].booksWithDescription = data.items.map(
            (item: any) => item.volumeInfo
          );
          this.descriptionsMissing = this.genres[
            genre
          ].booksWithDescription.every((book: any) => !book.description);
        }
      });
  }

  // Mostra i dettagli di un libro
  showDetails(book: any) {
    this.selectedBook = book;
    if (book.description) {
      this.showDetailsAlert = true;
    } else {
      if (this.descriptionsMissing) {
        alert('Nessuna descrizione disponibile per i libri di questo genere.');
      }
    }
  }

  // Svuota il carrello
  clearCart() {
    this.carrelloService.clearCarrello(); // Chiama la funzione per svuotare il carrello nel servizio
  }

  // Aggiungi un libro alla lista dei desideri
  addToWishlist(book: any) {
    this.wishlistItems.push(book);
    localStorage.setItem('wishlist', JSON.stringify(book));
    console.log('Aggiunto alla wishlist:', book.volumeInfo.title);
  }

  // Aggiungi un libro al carrello
  addToCart(book: any) {
    this.carrelloItems.push(book);
    this.cartResults = [...this.cartResults, book]; // Aggiungi il libro ai risultati del carrello
    console.log('Aggiunto al carrello:', book);
  }
}
