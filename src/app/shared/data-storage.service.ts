import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.services';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    private BASE_URL = 'https://ng-recipe-book-59195.firebaseio.com/recipes.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.BASE_URL + '?auth=' + token, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        return this.http.get<Recipe[]>(this.BASE_URL + '?auth=' + token).pipe(
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
