// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss'],
// })
// export class CardComponent implements OnInit {
//   @Input() book: any = { showDescription: false }; // Aggiungi showDescription come parte dell'oggetto book
//   toggleDescription() {
//     this.book.showDescription = !this.book.showDescription;
//   }

//   [x: string]: any;
//   genres: { [key: string]: { booksWithDescription: any[] } } = {
//     horror: { booksWithDescription: [] },
//     fantasy: { booksWithDescription: [] },
//     avventura: { booksWithDescription: [] },
//   };
//   cartItems: any[] = [];
//   selectedBook: any;

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     // Carica libri di genere "horror" e li aggiunge all'array
//     this.http
//       .get('https://www.googleapis.com/books/v1/volumes?q=horror&maxResults=5')
//       .subscribe((data: any) => {
//         if (data.items && data.items.length > 0) {
//           this.genres['horror'].booksWithDescription = data.items.map(
//             (item: any) => item.volumeInfo
//           );
//         }
//       });

//     // Carica libri di genere "fantasy" e li aggiunge all'array
//     this.http
//       .get('https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=5')
//       .subscribe((data: any) => {
//         if (data.items && data.items.length > 0) {
//           this.genres['fantasy'].booksWithDescription = data.items.map(
//             (item: any) => item.volumeInfo
//           );
//           console.log(
//             'Fantasy Books:',
//             this.genres['fantasy'].booksWithDescription
//           ); // Stampa i dati
//         }
//       });

//     // Carica libri di genere "avventura" e li aggiunge all'array
//     this.http
//       .get(
//         'https://www.googleapis.com/books/v1/volumes?q=avventura&maxResults=5'
//       )
//       .subscribe((data: any) => {
//         if (data.items && data.items.length > 0) {
//           this.genres['avventura'].booksWithDescription = data.items.map(
//             (item: any) => item.volumeInfo
//           );
//           console.log(
//             'Avventura Books:',
//             this.genres['avventura'].booksWithDescription
//           ); // Stampa i dati
//         }
//       });
//   }

//   showDetails(bookId: string) {
//     this.router.navigate(['/book-details', bookId]);
//   }

//   addToCart(book: any) {
//     this.cartItems.push(book); // Aggiungi il libro al carrello
//     console.log('Aggiunto al carrello:', book);
//   }
//   viewBookDetails(book: any) {
//     // Qui dovresti costruire l'URL con i parametri necessari dal tuo oggetto book
//     const url = `/book-details/${book.title}/${book.authors}/${book.publisher}/${book.publishedDate}/${book.description}`;

//     // Ora puoi navigare verso la pagina dei dettagli del libro
//     this.router.navigate([url]);
//   }
// }
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
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
  // addToCart(book: any) {
  //   this.cartItems.push(book);
  //   localStorage.setItem('userCarello', JSON.stringify(this.cartItems));
  //   console.log('Aggiunto al carrello:', book);
  //   this.router.navigate(['carrello'], { state: { book } });
  // }
  clearCart() {
    this.carrelloService.clearCarrello(); // Chiama la funzione per svuotare il carrello nel servizio
  }
  addToWishlist(book: any) {
    this.wishlistItems.push(book);
    localStorage.setItem('wishlist', JSON.stringify(book));
    console.log('Aggiunto alla wishlist:', book.volumeInfo.title);
  }
  addToCart(book: any) {
    this.carrelloItems.push(book);
    this.cartResults = [...this.cartResults, book]; // Aggiungi il libro ai risultati del carrello
    console.log('Aggiunto al carrello:', book);
  }
}
