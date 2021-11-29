import { Injectable } from '@angular/core';
import { Recipe } from '../classes/recipe.model';
import { Ingredient } from '../classes/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}

  private _recipes: Recipe[] = [
    new Recipe(
      0,
      'Rogan Josh',
      'Spicy curry',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Rogan_josh02.jpg',
      [
        new Ingredient('Lamb', 1),
        new Ingredient('Spices', 5)
      ]
    ),
    new Recipe(
      1,
      'Sushi',
      'Assorted',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1280px-Sushi_platter.jpg',
      [
        new Ingredient('Salmon', 4),
        new Ingredient('Tuna', 4),
        new Ingredient('Seaweed', 1),
        new Ingredient('Rice', 10)
      ]
    )
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  set recipes(recipe: Recipe[]) {
    this._recipes = recipe;
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }
}
