import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Ingredient } from '../../../classes/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';
import { Observable } from 'rxjs';
import { DataStorageService } from '../../../services/data-storage.service';

interface Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string
  ingredients: Ingredient[];
}

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {

    if (this.recipeService.recipes.length === 0) {
      this.dataStorageService.getRecipes();
    }

    return this.recipeService.getRecipe(+route.params['id']);
  }
}
