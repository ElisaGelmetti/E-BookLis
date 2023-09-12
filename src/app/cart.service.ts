import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyCRXtIP3pECh9gnLWzSzoAYuxw1AHAfZWs';
  baseUrl: any;

  constructor(private http: HttpClient) {}

  getBooksByGenre(genre: string): Observable<any> {
    const params = {
      q: `subject:${genre}`,
    };
    return this.http.get(this.apiUrl, { params });
  }
  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${bookId}`);
  }
  searchBooks(query: string): Observable<any> {
    const params = { q: query };
    return this.http.get(this.apiUrl, { params });
  }

  getBookDetails(bookId: string): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get(url);
  }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
