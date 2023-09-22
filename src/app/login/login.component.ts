import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router per reindirizzare l'utente
import { IRegister } from '../interfaces/register';
import { ILogin } from '../interfaces/login';
import { IAccesData } from '../interfaces/acces-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  isLoggedIn: boolean = false;
  signupUsers: any[] = [];
  signupObj: IRegister = {
    username: '',
    email: '',
    password: '',
  };
  loginObj: ILogin = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {} // Inietta il servizio Router

  ngOnInit(): void {
    // Recupera dati di registrazione dall'archivio locale
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    console.log('Dati di registrazione inseriti:', this.signupObj);

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
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        username: '',
        email: '',
        password: '',
      };
      alert('Credenziali registrate con successo.');
    }
  }

  onLogin() {
    console.log('dati inseriti:', this.loginObj);

    // Verifica se le credenziali di accesso sono corrette
    const isUserExist = this.signupUsers.find(
      (user) =>
        user.username === this.loginObj.username &&
        user.password === this.loginObj.password
    );

    if (isUserExist !== undefined) {
      alert('Utente autorizzato');
      this.router.navigate(['/home']); // Reindirizza alla pagina Home se le credenziali sono corrette
    } else {
      alert('Errore nelle credenziali');
    }
  }
}
