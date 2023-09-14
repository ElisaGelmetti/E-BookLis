import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss'],
})
export class HorrorComponent implements OnInit {
  horrorBooks: any[] = [];
  romanceBooks: any[] = [];
  fantasyBooks: any[] = [];
  cart: any[] = [];
  cartItems: any[] = [];
  [x: string]: any;
  bookId: string | null = null;
  bookDetails: any;
  constructor(private CartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this['route'].paramMap.subscribe(
      (params: { get: (arg0: string) => any }) => {
        const idParam = params.get('id');
        if (idParam !== null) {
          this.bookId = idParam;
          this['bookService']
            ['getBookById'](this.bookId)
            .subscribe((data: any) => {
              this.bookDetails = data;
            });
        } else {
        }
      }
    );
  }
}
