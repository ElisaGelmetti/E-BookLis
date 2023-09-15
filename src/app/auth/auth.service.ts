import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  isLoggedIn = true;
  isAdmin = true;

  constructor() {}

  inAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  signUp() {}
}
