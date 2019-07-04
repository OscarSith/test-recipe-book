import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.services';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    private BASE_URL = 'https://ng-recipe-book-59195.firebaseio.com/recipes.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService) {}

    storeRecipes() {
        // const token = this.authService.getToken();
        return this.http.put(this.BASE_URL, this.recipeService.getRecipes());

        // for progress
        /*
        let req = new HttpRequest('PUT', this.BASE_URL, this.recipeService.getRecipes(), {
          reportProgress: true,
          params: new HttpParams().set('auth', token)
        });

        return this.http.request(req);*/
        // Esto devuelve un observable donde uno se suscribe y retornará los datos de progreso de la subida o descarga
    }

    fetchRecipes() {
        // const token = this.authService.getToken();
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
