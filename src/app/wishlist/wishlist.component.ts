import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.services';
import { Item } from '../interfaces/libro';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  wishlistItems: any[] = [];
  private carrelloItems: any[] = [];
  cart: any[] = []; // Array per i libri nel carrello
  showDescription = false; // Aggiungi questa linea per dichiarare showDescription
  cartItems: any[] = []; //Questa è una variabile che rappresenta gli oggetti nel tuo carrello. Inizialmente, è un array vuoto.
  books: Item[] = []; //Questa variabile è un array di oggetti Item. Non sembra essere utilizzata nel codice che hai fornito.
  selectedBook: any;
  descriptionsMissing: boolean = false; //Questa variabile booleana indica se ci sono descrizioni mancanti per i libri di un certo genere
  cartResults: any[] = [];
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngOnInit() {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      const wishlistArray = Object.values(JSON.parse(storedWishlist));
      this.wishlistItems = wishlistArray;
    }
  }
  trackByFn(index: number, item: any): any {
    return item.id; // Sostituisci 'id' con la chiave unica dei tuoi dati, se disponibile.
  }
  removeFromWishlist(book: any) {
    const index = this.wishlistItems.indexOf(book);
    if (index !== -1) {
      this.wishlistItems.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems));
      console.log('Rimosso dalla Wishlist:', book.volumeInfo.title);
    }
  }
}
