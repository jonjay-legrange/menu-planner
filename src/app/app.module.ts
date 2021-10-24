import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './header/shopping/shopping.component';
import { ShoppingListComponent } from './header/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeItemComponent } from './header/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from "./header/recipes/recipe-list/recipe-list.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { MobileMenuDirective } from './shared/mobile-menu.directive';

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
    MobileMenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
