import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../../classes/recipe.model";
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.recipe = data['recipe'];
        }
      );
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe);
  }
}
