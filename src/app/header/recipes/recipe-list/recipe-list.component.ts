import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../classes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() displayedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Goulash', 'Meaty soup', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Gulyas080.jpg'
    ),
    new Recipe(
      'Gazpacho', 'Summer soup', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Gazpacho_con_su_guarnici%C3%B3n_-_jlastras.jpg'
    )
  ];

  ngOnInit(): void {
  }

  showRecipeDetail(recipe: Recipe) {
    this.displayedRecipe.emit(recipe);
  }
}
