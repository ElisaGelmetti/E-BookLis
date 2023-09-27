import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../interfaces/libro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  books: Item[] = [];
  selectedGenre: string = 'fantasy';
  cartItems: any[] = [];
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngOnInit(): void {}

  removeBook(book: any): void {
    // Rimuovi il libro dalla libreria
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
