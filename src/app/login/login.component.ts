// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {
//   signupUsers: any[] = [];
//   signupObj: any = {
//     username: '',
//     email: '',
//     password: '',
//   };
//   loginObj: any = {
//     userName: 'Elisa',
//     password: 'Ciao',
//   };

//   constructor() {}
//   ngOnInit(): void {
//     const localData = localStorage.getItem('signUpUsers');
//     if (localData != null) {
//       this.signupUsers = JSON.parse(localData);
//     }
//   }
//   onSignUp() {
//     this.signupUsers.push(this.signupObj);
//     localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
//     this.signupObj = {
//       username: 'Elisa',
//       email: 'elisa@yahoo.it',
//       password: 'Bachi',
//     };
//     console.log('funziona');
//   }
//   onLogin() {
//     const isUserExist = this.signupUsers.find(
//       (m) => m.userName == this.loginObj.UserName && m.password == this.loginObj
//     );
//     if (isUserExist != undefined) {
//       alert('Utente autorizzato');
//     } else {
//       alert('Utente autorizzato');
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router per reindirizzare l'utente

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
    userName: 'Elisa',
    password: 'elisa',
  };

  constructor(private router: Router) {} // Inietta il servizio Router

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
    const isUserExist = this.signupUsers.find(
      (user) =>
        user.username === this.loginObj.userName &&
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
