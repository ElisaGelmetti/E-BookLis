import { IAccesData } from './../interfaces/acces-data';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegister } from '../interfaces/register';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private baseUrl = '/api'; // L'URL del tuo server backend

  jwtHelper: JwtHelperService = new JwtHelperService(); //ci permette di lavorare facilmente con i token jwt

  baseUrl: string = 'http://localhost:3000 ';
  loginUrl: string = this.baseUrl + '/login';
  registerUrl: string = this.baseUrl + '/register';

  constructor(private http: HttpClient, private Router: Router) {}

  signUp(data: IRegister): Observable<IAccesData> {
    return this.http.post<IAccesData>(this.registerUrl, data).pipe(
      catchError((error: any) => {
        // Gestisci l'errore qui, ad esempio, loggalo e ritorna un Observable vuoto o un messaggio di errore
        console.error('Errore durante la registrazione:', error);
        return throwError('Errore durante la registrazione');
      })
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
