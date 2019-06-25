import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  isOpen = false;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Como params.id es string, se le agrega el signo de (+) para pasarlo a numerico
    this.route.params.subscribe((params: Params) =>
      this.recipe = this.recipeService.getRecipeByIndex(+params.id)
    );
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
