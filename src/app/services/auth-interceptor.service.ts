import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));

    if (!storedUser) {
      return next.handle(req);
    }

    const user: User = new User(storedUser.email, storedUser.id, storedUser._token, storedUser._tokenExpirationDate);

    if (!user?.token) {
      return next.handle(req);
    }

    const authorisedRequest = req.clone({
      params: new HttpParams().set('auth', user.token)
    });
    return next.handle(authorisedRequest);
  }
}
