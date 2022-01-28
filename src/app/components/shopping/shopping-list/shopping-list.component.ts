import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from "../../../classes/ingredient.model";
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private shoppingListSubscription: Subscription;
  shoppingList: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.shoppingList;
    this.shoppingListSubscription = this.shoppingListService.shoppingListChanged.subscribe(
      (shoppingList: Ingredient[]) => {
        this.shoppingList = shoppingList;
      }
    )
  }

  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }

  onRemoveIngredient(index: number): void {
    this.shoppingListService.shoppingList = this.shoppingListService.shoppingList.filter((ingredient, idx) => idx !== index)
  }

  onClearList(): void {
    this.shoppingListService.shoppingList = [];
    this.shoppingListService.onChange();
  }

  updateIngredient(ingredient: Ingredient): void {
    this.shoppingListService.ingredientToEdit = ingredient;
    this.shoppingListService.updateIngredient();
  }
}
