import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeMiniatureComponent } from './components/recipe-miniature/recipe-miniature.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddOrEditRecipeComponent } from './components/add-or-edit-recipe/add-or-edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    NotFoundComponent,
    RecipeMiniatureComponent,
    RecipeComponent,
    CarouselComponent,
    AddOrEditRecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
