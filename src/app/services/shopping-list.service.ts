import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChanged = new EventEmitter<Ingredient[]>();
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
    this.emitChange();
  }

  emitChange() {
    this.shoppingListChanged.emit(this._shoppingList);
  }
}
