import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe test', 'A short description of this recipe', 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg'),
    new Recipe('Recipe test', 'A short description of this recipe', 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/07/27/5b5b619e00887.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
