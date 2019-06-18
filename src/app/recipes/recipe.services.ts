import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe test', 'A short description of this recipe', 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg'),
        new Recipe('Recipe test B', 'A short description of this recipe', 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
