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
  wishlistItems: any[] = [];
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyCRXtIP3pECh9gnLWzSzoAYuxw1AHAfZWs';
  bookInfo: any; // Variabile per memorizzare le informazioni sul libro

  books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      dettagli:
        'Una terribile minaccia incombe sulla scuola di magia e stregoneria di Hogwarts. Sirius Black, il famigerato assassino, è evaso dalla prigione di Azkaban. È a caccia e la sua preda è proprio a Hogwarts, dove Harry e i suoi amici stanno per cominciare il loro terzo anno. Nonostante la sorveglianza dei Dissennatori la scuola non è più un luogo sicuro, perché al suo interno si nasconde un traditore... Il terzo capitolo di uno dei più grandi fenomeni letterari internazionali. Edizione speciale con contenuti inediti: la mappa di Hogwarts, il glossario, curiosità sui fondatori di Hogwarts.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjWDGpQIoiNONd_34O8NP841da_eYuCfZwn5NQrJP6o6d18c0jaui02Zqzh-87g8XrTY&usqp=CAU',
    },
    {
      title: 'Twilight',
      author: 'Stephenie Meyer',
      dettagli:
        "Bella si è appena trasferita a Forks. È il primo giorno nella nuova scuola e, quando incontra Edward Cullen, la sua vita prende una piega inaspettata e pericolosa. Edward è talmente bello da sembrare irreale. Tra i due nasce un'amicizia, che presto si trasforma in un'attrazione travolgente. Finora Edward è riuscito a tener nascosto il suo segreto, ma Bella è intenzionata a svelarlo. Quello che ancora non sa è che più gli si avvicina e maggiori sono i rischi per lei e per chi le sta accanto. Mentre nella vicina riserva indiana riprendono a circolare inquietanti leggende, un dubbio si fa strada nella mente di Bella. Il sogno romantico che sta vivendo potrebbe essere in realtà l'incubo che popola le sue notti.",
      imageUrl: 'https://m.media-amazon.com/images/I/31UOFc0BecL.jpg',
    },
    {
      title: 'Timeline',
      author: 'Micheal Crichton',
      dettagli:
        "Una squadra di archeologi è al lavoro sulle rovine di un villaggio medievale della Dordogna. Nel quartier generale della società finanziatrice del progetto gli studiosi faranno una scoperta ancora più sorprendente: il capo della misteriosa multinazionale ha inventato una vera macchina del tempo, che nel tentativo di ritrovare il professor Johnson, il capo della spedizione precipitato in un tunnel spaziotemporale, li proietterà in uno dei periodi più avventurosi e violenti della storia. Da quel momento i nostri eroi dovranno riuscire a sopravvivere nel bel mezzo della guerra dei Cent'Anni e ritrnare sani e salvi nel XXI secolo.",
      imageUrl: 'https://www.ibs.it/images/9788811681038_0_200_0_75.jpg',
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
  addToWishlist(book: any) {
    this.wishlistItems.push(book);
    localStorage.setItem('wishlist', JSON.stringify(book));
    console.log('Aggiunto alla wishlist:', book.volumeInfo.title);
  }
}
