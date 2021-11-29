import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {}

  createNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
