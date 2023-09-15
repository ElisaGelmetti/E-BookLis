import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent {
  cartItems: any[] = [];
  @Input() book: any = { showDescription: false };
  genres: { [key: string]: { booksWithDescription: any[] } } = {
    horror: { booksWithDescription: [] },
    fantasy: { booksWithDescription: [] },
    avventura: { booksWithDescription: [] },
  };

  selectedBook: any;
  showDetailsAlert: boolean = false;
  descriptionsMissing: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks('horror');
    this.loadBooks('fantasy');
    this.loadBooks('avventura');
  }

  loadBooks(genre: string) {
    this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=5`
      )
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.genres[genre].booksWithDescription = data.items.map(
            (item: any) => item.volumeInfo
          );
          this.descriptionsMissing = this.genres[
            genre
          ].booksWithDescription.every((book: any) => !book.description);
        }
      });
  }
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
  addToCart(book: any) {
    this.cartItems.push(book);
    console.log('Aggiunto al carrello:', book);
  }
}
