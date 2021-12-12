import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../../../classes/ingredient.model";
import { ShoppingListService } from '../../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('shoppingListForm') shoppingListForm: NgForm;
  submitted = false;

  private shoppingListSubscription: Subscription;
  private editingIngredientSubscription: Subscription;
  activeIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.shoppingListSubscription = this.shoppingListService.shoppingListChanged.subscribe(
      (shoppingList: Ingredient[]) => {
        if (this.shoppingListService.shoppingList.length < 1) {
          this.submitted = false;
        }
      }
    );

    this.editingIngredientSubscription = this.shoppingListService.editingIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.shoppingListForm.form.patchValue({
          ingredientInput: ingredient.name,
          amountInput: ingredient.amount
        })
        this.activeIngredient = ingredient;
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.shoppingListForm.valid && this.shoppingListForm.controls.amountInput.value > 0) {

      const ingredient = new Ingredient(
        this.shoppingListForm.controls.ingredientInput.value,
          this.shoppingListForm.controls.amountInput.value
      );

      if (this.activeIngredient) {
        this.shoppingListService.onSaveChangedIngredient(ingredient);
        this.activeIngredient = null;
      } else {
        this.shoppingListService.addIngredient(ingredient);
      }

      this.shoppingListService.onChange();
      this.submitted = false;
    }
  }


  onReset() {
    this.submitted = false;
    this.activeIngredient = null;
    this.shoppingListForm.reset();
  }
}
