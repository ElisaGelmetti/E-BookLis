import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: { book: any; quantity: number }[] = []; // Inizializza il carrello come un array vuoto con quantità
  showDescription(book: any) {
    alert(book.description || 'Descrizione non disponibile.');
  }

  addToCart(book: any) {
    const existingItem = this.cartItems.find(
      (item) => item.book.id === book.id
    );

    if (existingItem) {
      existingItem.quantity++; // Incrementa la quantità se il libro è già nel carrello
    } else {
      this.cartItems.push({ book, quantity: 6 }); // Aggiungi il libro al carrello con quantità 1
    }
  }
  horrorBooks: any[] = [];
  fantasyBooks: any[] = [];
  adventureBooks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Richiesta GET all'API di Google Books per libri di genere horror
    this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=horror&maxResults=5')
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.horrorBooks = data.items.map((item: any) => item.volumeInfo);
        }
      });
    this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=fantay&maxResults=5')
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.horrorBooks = data.items.map((item: any) => item.volumeInfo);
        }
      });
    this.http
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=adventure&maxResults=5'
      )
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.horrorBooks = data.items.map((item: any) => item.volumeInfo);
        }
      });
  }
}
