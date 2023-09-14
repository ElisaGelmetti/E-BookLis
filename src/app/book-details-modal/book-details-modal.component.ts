import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent {
  [x: string]: any;
  @Input() book: any;
  @Input() selectedBook: any;

  constructor(public activeModal: NgbActiveModal) {}
  openBookDetailsModal(book: any) {
    const modalRef = this['modalService'].open(BookDetailsModalComponent, {
      size: 'lg',
    }); // 'lg' per un modal di dimensioni più grandi
    modalRef.componentInstance.selectedBook = book;
  }
  // Metodo per chiudere il modal
  closeModal() {
    this.activeModal.close();
  }
}
