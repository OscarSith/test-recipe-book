import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.services';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

    private BASE_URL = 'https://ng-recipe-book-59195.firebaseio.com/recipes.json';

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.BASE_URL, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(this.BASE_URL).pipe(
            map((recipes) => {
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }

                return recipes;
            })
        ).subscribe(
            (response) => this.recipeService.setRecipes(response)
        );
    }
}
