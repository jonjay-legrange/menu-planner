import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './components/recipes/recipe-detail/recipe-resolver.service';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipeResolverService}},
      {path: ':id/edit', component: RecipeEditComponent , resolve: {recipe: RecipeResolverService}}
  ]},
  {path: 'shopping-list', component: ShoppingComponent},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
