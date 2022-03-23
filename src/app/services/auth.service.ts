import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

export interface AuthReponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  private readonly API_KEY = '';
  private readonly REGISTRATION_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;
  private readonly SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;

  constructor(private httpClient: HttpClient, private router: Router) { }

  registerNewUser(email: string, password: string): Observable<Object> {
    return this.httpClient.post<AuthReponseData>(
      this.REGISTRATION_URL, {
      'email': email,
      'password': password,
      'returnSecureToken': true
    }).pipe(
      catchError(this.handleError),
      tap(response => {
        let authReponseData: any = response;
        this.handleAuthentication(authReponseData);
      })
    );
  }

  login(email: string, password: string): Observable<Object> {
    return this.httpClient.post<AuthReponseData>(
      this.SIGN_IN_URL, {
        'email': email,
        'password': password,
        'returnSecureToken': true
      }).pipe(
        catchError(this.handleError),
        tap(response => {
          let authReponseData: any = response;
          this.handleAuthentication(authReponseData);
        })
      );
  }

  checkLoginStatus(): void {
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));

    if (!storedUser) {
      this.logout();
    }
  }

  logout(): void {
    localStorage.removeItem('storedUser');
    this.router.navigate(['/login']);
  }

  private handleAuthentication(authReponseData: AuthReponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +authReponseData.expiresIn * 1000
    );
    const user = new User(
      authReponseData.email,
      authReponseData.localId,
      authReponseData.idToken,
      expirationDate
    );
    this.user.next(user);
    localStorage.setItem('storedUser', JSON.stringify(user));
  }

  handleError(errorRes): Observable<Object> {
    let errorMessage = 'An unknown error occured';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email has already been registered'
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found'
        break
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid'
        break
      default:
        errorMessage = errorRes.error.error.message
    }

    return throwError(errorMessage);
  }

}
