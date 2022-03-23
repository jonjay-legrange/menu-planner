import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import {
  ShoppingListEditComponent
} from './components/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { NextElementDropdownDirective } from './shared/next-element-dropdown.directive';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/spinner/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    NextElementDropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
