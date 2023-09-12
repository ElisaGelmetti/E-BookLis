import { Component } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent {
  cartItems: any[] = [];

  addToCart(book: any) {
    this.cartItems.push(book);
  }
}
