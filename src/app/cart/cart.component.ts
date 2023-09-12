import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  showDescription(book: any) {
    alert(book.description || 'Descrizione non disponibile.');
  }

  addToCart(book: any) {
    // Implementa il codice per aggiungere il libro al carrello
    // Puoi utilizzare un array per tenere traccia dei libri nel carrello
    // Ad esempio, this.cartItems.push(book);
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
    // Puoi fare lo stesso per i generi fantasy e avventura
  }
}
