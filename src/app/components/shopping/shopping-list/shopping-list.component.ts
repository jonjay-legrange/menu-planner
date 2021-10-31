import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from "../../../classes/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input('shoppingList') shoppingList: Ingredient[] = [];

  ngOnInit(): void {
  }
}
