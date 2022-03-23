import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { DataStorageService } from '../../../services/data-storage.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html'
})
export class RecipeStartComponent implements OnInit {
  hasRecipes: boolean;

  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    if (this.recipeService.recipes.length === 0) {
      this.dataStorageService.getRecipes();
    }

    this.hasRecipes = this.recipeService.recipes.length > 0;
  }
}
