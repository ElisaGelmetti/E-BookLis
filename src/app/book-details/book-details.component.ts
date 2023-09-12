import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient // Inietta HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookId = params.get('id'); // Recupera l'ID del libro dai parametri della route

      // Esegui la richiesta HTTP per ottenere i dettagli del libro dalla API di Google Books
      this.http
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .subscribe((data: any) => {
          // Assegna i dettagli del libro all'oggetto this.book
          this.book = data;
        });
    });
  }
}
