import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../../classes/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Beef', 100),
    new Ingredient('Carrots', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
