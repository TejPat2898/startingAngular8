import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Steak',
    'Using this recipe you can cook a delicious steak in less than half an hour of cook time',
    'https://howtobbqright.com/wp-content/uploads/2019/06/IMG_2491.jpg'),
    new Recipe('Dosa', 'Using this recipe you can cook delicious dosa in less than half an hour of time',
    'https://thumbs.dreamstime.com/b/dosa-banana-leaf-traditional-southern-indian-rice-111935380.jpg')
  ];

  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
