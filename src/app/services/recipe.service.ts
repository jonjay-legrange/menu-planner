import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../classes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'Goulash', 'Meaty soup', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Gulyas080.jpg'
    ),
    new Recipe(
      'Gazpacho', 'Summer soup', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Gazpacho_con_su_guarnici%C3%B3n_-_jlastras.jpg'
    )
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  set recipes(recipe: Recipe[]) {
    this._recipes = recipe;
  }
}
