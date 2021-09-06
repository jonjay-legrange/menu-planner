import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../../classes/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output('ingredientEmitter') ingredientEmitter = new EventEmitter<Ingredient>();
  @Output('clearEmitter') clearEmitter = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onSubmit() {
    this.ingredientEmitter.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }

  onClear() {
    this.clearEmitter.emit();
  }
}
