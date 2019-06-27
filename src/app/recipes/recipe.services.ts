import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Recipe test',
            'A short description of this recipe',
            'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg',
            [
                new Ingredient('Patatas', 10),
                new Ingredient('Fried Chiken', 1)
            ]
        ),
        new Recipe(
            'Recipe test B',
            'A short description of this recipe',
            'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg',
            [
                new Ingredient('Tomatoes', 5),
                new Ingredient('Bread', 8),
                new Ingredient('Bananas', 3)
            ]
        )
    ];

    constructor(private slService: ShoppinglistService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipeByIndex(id: number) {
        return this.recipes[id];
    }
}
