import {Component, OnInit} from '@angular/core';
import {Recipe} from "./classes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public displayedRecipe: Recipe;

  ngOnInit(): void {
  }

  setDisplayedRecipe(recipe: Recipe) {
    this.displayedRecipe = recipe;
  }
}
