import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isShopping = new EventEmitter<boolean>();

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.isShopping.emit(false);
  }

  navigate(isShopping) {
    this.isShopping.emit(isShopping);
  }

  getRecipes() {
    this.dataStorageService.getRecipes();
  }

  saveRecipes() {
    this.dataStorageService.saveRecipes();
  }
}
