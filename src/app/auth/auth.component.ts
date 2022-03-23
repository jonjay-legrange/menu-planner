import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  loginModeActive = true;
  isLoading = false;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  switchMode(login: boolean): void {
    this.loginModeActive = login;
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }

    let authObservable: Observable<Object>;
    this.isLoading = true;

    if (this.loginModeActive) {
      authObservable = this.authService.login(authForm.value.email, authForm.value.password);
    } else {
      authObservable = this.authService.registerNewUser(authForm.value.email, authForm.value.password);
    }

    authObservable.subscribe(authResponseData => {
        console.log(authResponseData)
        this.isLoading = false;
        this.router.navigate(['/recipes/']);
      },
      error => {
        console.log(error)
        this.errorMsg = error;
        this.isLoading = false;
      }
    );

    authForm.resetForm();
    this.errorMsg = null;
  }
}
