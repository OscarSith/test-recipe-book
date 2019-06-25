import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;
  isOpen = false;

  constructor(private recipeService: RecipeService) { }

  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
