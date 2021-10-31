import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isShopping = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isShopping.emit(false);
  }

  navigate(isShopping) {
    this.isShopping.emit(isShopping);
  }
}
