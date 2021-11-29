import { Injectable } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredient[]>();
  private _shoppingList: Ingredient[] = [];

  get shoppingList(): Ingredient[] {
    return this._shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._shoppingList.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._shoppingList.push(...ingredients);
  }

  set shoppingList(shoppingList: Ingredient[]) {
    this._shoppingList = shoppingList;
    this.onChange();
  }

  onChange() {
    this.shoppingListChanged.next(this._shoppingList);
  }
}
