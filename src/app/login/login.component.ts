// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss',],
// })
// export class LoginComponent implements OnInit {
//   signupUsers: any[] = [];
//   signupObj: any = {
//     username: '',
//     email: '',
//     password: '',
//   };
//   loginObj: any = {
//     userName: '',
//     password: '',
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
//       username: '',
//       email: '',
//       password: '',
//     };
//   }
//   onLogin() {
//     debugger;
//     const isUserExist = this.signupUsers.find(
//       (m) => m.userName == this.loginObj.UserName && m.password == this.loginObj
//     );
//     if (isUserExist != undefined) {
//       alert('Utente autorizzato');
//     } else {
//       alert('Errore nelle credenziali');
//     }
//   }
// }
