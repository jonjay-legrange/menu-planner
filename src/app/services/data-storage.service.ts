import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../classes/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  readonly QUERY_URL = 'https://menu-planner-7906a-default-rtdb.europe-west1.firebasedatabase.app/';
  readonly RECIPES_URL = '/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  getRecipes() {
    this.httpClient.get<Recipe[]>(
      this.QUERY_URL + this.RECIPES_URL,
    ).subscribe(recipes =>
      this.recipeService.recipes = recipes
    );
  }

  saveRecipes() {
    const recipes = this.recipeService.recipes;
    this.httpClient.put(
      this.QUERY_URL + this.RECIPES_URL,
          recipes
    ).subscribe(response =>
      console.log(response)
    );
  }
}
