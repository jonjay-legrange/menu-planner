import { Injectable } from '@angular/core';
import { Recipe } from '../classes/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  private _recipes: Recipe[] = [];

  // private _recipes: Recipe[] = [
  //   new Recipe(
  //     0,
  //     'Rogan Josh',
  //     'Spicy curry',
  //     'https://upload.wikimedia.org/wikipedia/commons/a/a8/Rogan_josh02.jpg',
  //     [
  //       new Ingredient('Lamb', 1),
  //       new Ingredient('Spices', 5)
  //     ]
  //   ),
  //   new Recipe(
  //     1,
  //     'Sushi',
  //     'Assorted Platter',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1280px-Sushi_platter.jpg',
  //     [
  //       new Ingredient('Salmon', 4),
  //       new Ingredient('Tuna', 4),
  //       new Ingredient('Seaweed', 1),
  //       new Ingredient('Rice', 10)
  //     ]
  //   )
  // ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  set recipes(recipes: Recipe[]) {
    this._recipes = recipes;
    this.onChange();
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

  getRecipe(id: number) {
    return this._recipes.find( recipe => recipe.id == id);
  }

  addNewRecipe(recipe: Recipe): void {
    // recipe.id = this._recipes.length;
    this._recipes.push(recipe);
    this.onChange();
  }

  updateRecipe(editedRecipe: Recipe): void {
    const saveIndex = this._recipes.findIndex( recipe => recipe.id == editedRecipe.id );
    this._recipes[saveIndex] = editedRecipe;
    this.onChange();
  }

  onChange(): void {
    this.recipesChanged.next(this._recipes);
  }
}
