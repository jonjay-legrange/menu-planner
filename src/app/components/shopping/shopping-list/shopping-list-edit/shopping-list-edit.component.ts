import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../../../classes/ingredient.model";
import { ShoppingListService } from '../../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.shoppingListService.addIngredient(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
      )
    );

    this.shoppingListService.onChange();
  }

  onClear() {
    this.shoppingListService.shoppingList = [];
    this.shoppingListService.onChange();
  }
}
