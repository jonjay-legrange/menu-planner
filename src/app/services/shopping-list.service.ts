import { Injectable } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredient[]>();
  editingIngredient = new Subject<Ingredient>();
  private _shoppingList: Ingredient[] = [];
  private _ingredientToEdit: Ingredient;

  get shoppingList(): Ingredient[] {
    return this._shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this._shoppingList.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this._shoppingList.push(...ingredients);
  }

  set shoppingList(shoppingList: Ingredient[]) {
    this._shoppingList = shoppingList;
    this.onChange();
  }

  onChange(): void {
    this.shoppingListChanged.next(this._shoppingList);
  }

  set ingredientToEdit(ingredient: Ingredient) {
    this._ingredientToEdit = ingredient;
  }

  onEditIngredient(): void {
    this.editingIngredient.next(this._ingredientToEdit);
  }

  onSaveChangedIngredient(ingredient: Ingredient): void {
    const saveIndex = this._shoppingList.indexOf(this._ingredientToEdit);
    this._shoppingList[saveIndex] = ingredient;
    this.onChange();
  }
}
