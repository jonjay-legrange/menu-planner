import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));
    let user: User;

    if (storedUser) {
      user = new User(storedUser.email, storedUser.id, storedUser._token, storedUser._tokenExpirationDate);
    }

    if (user.token == null) {
      this.router.createUrlTree(['/auth']);
    } else {
      return true;
    }
  }
}
