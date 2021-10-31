import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../classes/ingredient.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public addedIngredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.addedIngredients.push(ingredient);
  }

  clearList() {
    this.addedIngredients = [];
  }
}
