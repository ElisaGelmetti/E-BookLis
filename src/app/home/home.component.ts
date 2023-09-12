import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyCRXtIP3pECh9gnLWzSzoAYuxw1AHAfZWs';
  bookInfo: any; // Variabile per memorizzare le informazioni sul libro

  books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      dettagli:
        'Una terribile minaccia incombe sulla Scuola di Magia e Stregoneria di Hogwarts. Sirius Black, il famigerato assassino, è evaso dalla prigione di Azkaban. È in caccia e la sua preda è proprio a Hogwarts, dove Harry e i suoi amici stanno per cominciare il loro terzo anno.',
      imageUrl:
        'https://www.lafeltrinelli.it/images/9788869186127_0_536_0_75.jpg',
    },
    {
      title: 'Twilight',
      author: 'Stephenie Meyer',
      dettagli:
        'La giovane e disadattata Bella Swan incontra un ragazzo misterioso e i cui occhi sembrano scrutare direttamente nella sua anima. Edward è un vampiro e la ragazza, si innamora perdutamente',
      imageUrl: 'https://m.media-amazon.com/images/I/31UOFc0BecL.jpg',
    },
    {
      title: 'Timeline',
      author: 'Micheal Crichton',
      dettagli:
        "Dopo ventiquattr'ore è morto e il suo corpo viene cremato dalle uniche persone che sembrano conoscerlo. All'altro capo del mondo una squadra di archeologi è al lavoro sulle rovine di un villaggio medievale della Dordogna, dove scopre una stanza rimasta sigillata per oltre seicento anni'",
      imageUrl:
        'https://m.media-amazon.com/images/I/31VNbTqmu6L._AC_UF1000,1000_QL80_.jpg',
    },
    // Aggiungi altri libri secondo necessità
  ];

  constructor(private http: HttpClient, config: NgbCarouselConfig) {
    // Personalizza le opzioni del carosello se necessario
    config.interval = 9000; // Tempo in millisecondi tra le diapositive (imposta a tuo piacimento)
    config.wrap = true; // Il carosello torna alla prima diapositiva dopo l'ultima
  }

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
