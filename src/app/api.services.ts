// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
@Injectable({
  providedIn: 'root', // Questo servizio è fornito a livello globale
})
export class ApiService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  // Esempio di metodo per cercare libri in base a un termine di ricerca
  searchBooks(searchTerm: string): Observable<any> {
    const params = { q: searchTerm }; // Parametri della query
    return this.http.get(`${this.apiUrl}`, { params });
  }

  // Esempio di metodo per ottenere i dettagli di un libro in base all'ID del volume
  getBookDetails(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${bookId}`);
  }
}
