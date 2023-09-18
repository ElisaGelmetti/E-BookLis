import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.services';
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

  constructor(private http: HttpClient, private apiService: ApiService) {}

  searchBooks() {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      // Ricevi i risultati della ricerca
      this.searchResults = data.items || [];
      console.log('Ricerca libri per:', this.searchTerm);
      // Qui dovresti effettuare una chiamata API per recuperare i libri in base al termine di ricerca
      // Successivamente, puoi visualizzare i risultati nel tuo componente principale o in un altro componente.
    });
  }
  addToCart(book: any) {
    this.cart.push(book);
    localStorage.setItem('usercarrello', JSON.stringify(book));
    console.log('Aggiunto al Carrello:', book.volumeInfo.title);
  }
}
