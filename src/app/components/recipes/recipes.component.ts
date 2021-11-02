import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../classes/recipe.model";
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public displayedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.displayedRecipe = recipe;
      }
    )
  }
}
