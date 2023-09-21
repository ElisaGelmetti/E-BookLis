import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // Funzione per gestire l'invio del modulo
  handleSubmit(event: Event) {
    event.preventDefault(); // Evita il comportamento predefinito del modulo (ricaricare la pagina)

    // Recupera il valore dell'email dall'input
    const emailInput = document.getElementById(
      'form5Example21'
    ) as HTMLInputElement;

    // Effettua una semplice convalida dell'email (puoi personalizzare questa parte)
    if (this.isValidEmail(emailInput.value)) {
      // Invia l'email al server o esegui altre operazioni necessarie
      alert('Email inviata con successo: ' + emailInput.value);

      // Resetta il modulo (opzionale)
      emailInput.value = '';
    } else {
      alert('Inserisci un indirizzo email valido.');
    }
  }

  // Funzione per la convalida dell'email (esempio molto semplice)
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
