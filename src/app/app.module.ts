import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeMiniatureComponent } from './components/recipe-miniature/recipe-miniature.component';

@NgModule({
  declarations: [AppComponent, RecipesListComponent, NotFoundComponent, RecipeMiniatureComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
