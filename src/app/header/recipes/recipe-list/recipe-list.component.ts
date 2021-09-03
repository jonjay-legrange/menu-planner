import { Component, OnInit } from '@angular/core';
import {Recipe} from "../classes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Goulash', 'Meaty soup', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Gulyas080.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
