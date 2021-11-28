import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../classes/recipe.model";
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public displayedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.displayedRecipe = recipe;
      }
    )
  }

  createNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
