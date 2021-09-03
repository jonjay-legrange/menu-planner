import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-planner';
  public isShopping: boolean;

  onNavigate(isShopping) {
    this.isShopping = isShopping;
  }
}
