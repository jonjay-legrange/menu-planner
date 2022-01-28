import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Ingredient } from '../../../classes/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';
import { Observable } from 'rxjs';

interface Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string
  ingredients: Ingredient[];
}

@Injectable()
export class RecipeResolverService implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipe(+route.params['id']);
  }
}
