import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit-recipe',
  templateUrl: './add-or-edit-recipe.component.html',
  styleUrls: ['./add-or-edit-recipe.component.scss'],
})
export class AddOrEditRecipeComponent implements OnInit {
  favoriteColorControl = new FormControl('test');
  constructor() {}

  ngOnInit(): void {}
}
