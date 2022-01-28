import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html'
})
export class RecipeStartComponent implements OnInit {
  hasRecipes: boolean;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.hasRecipes = this.recipeService.recipes.length > 0;
  }
}
