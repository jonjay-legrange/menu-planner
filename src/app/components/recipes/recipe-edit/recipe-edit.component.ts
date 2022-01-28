import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../../classes/recipe.model';
import { Ingredient } from '../../../classes/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  newRecipe: boolean;
  recipe: Recipe;
  recipeEditForm: FormGroup;
  submitted = false;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.recipe = data['recipe'];
          this.newRecipe = this.recipe == null;
        }
      );

    this.initForm();
  }

  private initForm(): void {
    this.recipeEditForm = this.formBuilder.group({
      'recipeDetails': this.formBuilder.group({
        name: [this.recipe?.name, Validators.required],
        description: [this.recipe?.description, Validators.required],
        imageUrl: [this.recipe?.imageUrl]
      }),
      ingredients: this.formBuilder.array([])
    });

    if (this.recipe) {
      this.recipe.ingredients.forEach(
        ingredient => this.onAddIngredient(ingredient)
      )
    } else {
      this.onAddNewIngredient();
    }
  }

  buildIngredient(ingredient: Ingredient): FormGroup {
    return this.formBuilder.group({
      ingredientName: [ingredient?.name, Validators.required],
      ingredientAmount: [ingredient?.amount, Validators.required]
    })
  }

  onAddNewIngredient(): void {
    this.ingredients.push(this.buildIngredient(null));
  }

  onAddIngredient(ingredient: Ingredient): void {
    this.ingredients.push(this.buildIngredient(ingredient));
  }

  onRemoveIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  get ingredients(): FormArray {
    return this.recipeEditForm.get('ingredients') as FormArray;
  }

  get recipeDetails(): FormGroup {
    return this.recipeEditForm.get('recipeDetails') as FormGroup;
  }

  get ingredientsControls() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  onSave(): void {
    this.submitted = true;

    if (this.recipeEditForm.valid) {
      let ingredients: Ingredient[] = [];
      this.ingredients.controls.forEach(
        control => ingredients.push(new Ingredient(control.value.ingredientName, control.value.ingredientAmount))
      )

      let recipe: Recipe = new Recipe(
        this.recipeService.recipes.length,
        this.recipeDetails.value.name,
        this.recipeDetails.value.description,
        this.recipeDetails.value.imageUrl,
        ingredients
      );

      if (this.recipe.id) {
        this.recipeService.updateRecipe(recipe);
      } else {
        this.recipeService.addNewRecipe(recipe);
    }

      this.submitted = false;
    }
  }

  onClear(): void {
    this.initForm();
  }
}
