// carrello.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  private carrelloItems: any[] = [];

  addToCarrello(book: any) {
    this.carrelloItems.push(book);
  }

  getCarrelloItems() {
    return this.carrelloItems;
  }

  // Aggiungi una funzione per svuotare il carrello
  clearCarrello() {
    this.carrelloItems = [];
  }
}
