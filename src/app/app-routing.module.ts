import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddOrEditRecipeComponent } from './components/add-or-edit-recipe/add-or-edit-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesListComponent,
  },
  { path: 'recipe', component: RecipeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'new-recipe', component: AddOrEditRecipeComponent },
  {
    path: 'edit-recipe',
    component: AddOrEditRecipeComponent,
    data: { isEditable: true },
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
