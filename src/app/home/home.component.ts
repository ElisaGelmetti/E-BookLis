import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyCRXtIP3pECh9gnLWzSzoAYuxw1AHAfZWs';
  bookInfo: any; // Variabile per memorizzare le informazioni sul libro

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Effettua una richiesta GET all'API di Google Books per il libro desiderato
    this.http
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+Prigioniero+Azkaban'
      )
      .subscribe((data: any) => {
        if (data.items && data.items.length > 0) {
          this.bookInfo = data.items[0].volumeInfo;
        }
      });
  }
}
