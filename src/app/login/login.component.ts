import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    // Verifica se il nome utente e la password sono stati inseriti
    if (
      this.signupObj.username.trim() === '' ||
      this.signupObj.password.trim() === ''
    ) {
      alert('Errore: Nome utente e password sono obbligatori.');
      return; // Esce dalla funzione se mancano nome utente o password
    }

    // Verifica se il nome utente è già stato registrato
    const isUserExist = this.signupUsers.some(
      (user) => user.username === this.signupObj.username
    );
    if (isUserExist) {
      alert('Errore: Questo nome utente è già stato registrato.');
    } else {
      // Nome utente non esiste, quindi registra le credenziali
      this.signupUsers.push(this.signupObj);

      // Invia i dati al server tramite il servizio AuthService
      this.authService.register(this.signupObj).subscribe(
        (response) => {
          console.log('Dati inviati al server:', response);
          // Puoi gestire la risposta dal server qui, se necessario
        },
        (error) => {
          console.error('Errore durante la registrazione:', error);
          // Gestisci gli errori qui, se necessario
        }
      );

      this.signupObj = {
        username: '',
        email: '',
        password: '',
      };
      alert('Credenziali registrate con successo.');
    }
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (user) =>
        user.username === this.loginObj.userName &&
        user.password === this.loginObj.password
    );

    this.authService.login(this.loginObj).subscribe(
      (response) => {
        console.log('Accesso consentito:', response);
        // Altri gestioni della risposta, ad esempio reindirizzamento
      },
      (error) => {
        console.error("Errore durante l'accesso:", error);
        // Gestione degli errori
      }
    );
  }
}
