import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss'],
})
export class HorrorComponent implements OnInit {
  books: any[] = [];
  selectedBook: any;
  showDetailsModal: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadHorrorBooks();
  }

  loadHorrorBooks() {
    this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=horror&maxResults=10')
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.books = data.items.map((item: any) => item.volumeInfo);
        }
      });
  }
  showDetails(book: any) {
    if (book.description) {
      this.selectedBook = book;
    } else {
      // Se il libro non ha una descrizione, mostra un alert
      alert('Dettagli non disponibili per questo libro.');
    }
    this.selectedBook = book;
    this.showDetailsModal = true;
    console.log('Dettagli del libro:', book);
  }

  addToCart(book: any) {
    // Implementa il codice per aggiungere il libro al carrello
    // Puoi utilizzare un servizio o una variabile per gestire il carrello.
    console.log('Aggiunto al carrello:', book);
  }
  closeDetailsModal() {
    this.selectedBook = null;
  }
  // Aggiungi altri metodi specifici del genere Horror, se necessario.
}
