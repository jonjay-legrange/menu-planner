import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../classes/recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from './auth.service';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private readonly QUERY_URL = 'https://menu-planner-7906a-default-rtdb.europe-west1.firebasedatabase.app';
  private readonly RECIPES_URL = '/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  getRecipes() {
    this.authService.user.subscribe(user => { console.log(user) });
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));
    const user: User = new User(storedUser.email, storedUser.id, storedUser._token, storedUser._tokenExpirationDate);

    this.httpClient.get<Recipe[]>(
      this.QUERY_URL + this.RECIPES_URL,
      {
        params: new HttpParams().set('auth', user.token)
      }
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
