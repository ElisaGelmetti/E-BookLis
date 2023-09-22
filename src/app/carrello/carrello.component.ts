import { CartBook, Item } from './../interfaces/libro';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Libri, VolumeInfo } from '../interfaces/libro';
import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.services';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent {
  cartItems: any[] = []; //Questa è una variabile che rappresenta gli oggetti nel tuo carrello. Inizialmente, è un array vuoto.
  @Input() book: any = { showDescription: false }; //Questo è un input decorator che indica che book può essere passato come input a questo componente. Inizialmente, book è un oggetto con una proprietà showDescription impostata su false.
  genres: { [key: string]: { booksWithDescription: any[] } } = {
    horror: { booksWithDescription: [] },
    fantasy: { booksWithDescription: [] },
    avventura: { booksWithDescription: [] },
  };

  books: Item[] = []; //Questa variabile è un array di oggetti Item. Non sembra essere utilizzata nel codice che hai fornito.
  private carrelloItems: any[] = []; // Questa variabile privata è un array che tiene traccia degli oggetti aggiunti al carrello. Viene utilizzata nel metodo addToCart.
  selectedBook: any; //Questa variabile tiene traccia del libro selezionato per mostrare i dettagli.
  showDetailsAlert: boolean = false; // Questa variabile booleana indica se mostrare o nascondere l'alert dei dettagli del libro.
  descriptionsMissing: boolean = false; //Questa variabile booleana indica se ci sono descrizioni mancanti per i libri di un certo genere
  cartResults: any[] = []; //Questa variabile è un array di risultati del carrello. Non sembra essere utilizzata nel codice che hai fornito.
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadBooks('horror');
    this.loadBooks('fantasy');
    this.loadBooks('avventura');
    const book = localStorage.getItem('usercarrello');
    if (book) this.books.push(JSON.parse(book));
    console.log('Aggiunto nella Wishlist', this.books);
    this.book = this.router.snapshot;
  }
  //Nel metodo ngOnInit(), stai inizializzando il componente. Carichi i libri per i generi "horror", "fantasy" e "avventura"
  // e ottieni anche l'input del libro dalla route attiva.

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
  // stai effettuando una richiesta HTTP per ottenere i libri di un certo
  // genere da Google Books API. Successivamente, stai popolando l'array genres con i libri risultanti.

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

  // ...

  addToCart(book: any) {
    // Aggiungi il libro al carrello locale
    this.carrelloItems.push(book);

    // Effettua una richiesta PUT per aggiornare il carrello dell'utente sul server
    const userId = 'user123'; // Sostituisci con l'ID dell'utente corrente
    this.http
      .put('/api/user/cart', { userId, books: this.carrelloItems })
      .subscribe(
        (response) => {
          console.log('Libri nel carrello aggiornati con successo:', response);
          // Puoi gestire la risposta dal server qui, se necessario
        },
        (error) => {
          console.error('Errore durante laggiornamento del carrello:', error);
          // Gestisci gli errori qui, se necessario
        }
      );
  }

  getCarrelloItems() {
    return this.carrelloItems;
  }
  removeFromCart(book: any) {
    // Trova l'indice del libro nel carrello
    const index = this.books.indexOf(book);

    // Rimuovi il libro dal carrello
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
