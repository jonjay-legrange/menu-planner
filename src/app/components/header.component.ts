import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() isShopping = new EventEmitter<boolean>();
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.isShopping.emit(false);
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    const storedUser = JSON.parse(localStorage.getItem('storedUser'));
    if (storedUser) {
      const user: User = new User(storedUser.email, storedUser.id, storedUser._token, storedUser._tokenExpirationDate);
      this.isAuthenticated = user.token != null;
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  saveRecipes() {
    this.dataStorageService.saveRecipes();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
