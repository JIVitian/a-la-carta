import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipe: Recipe = {
    id: 1,
    title: 'Pizza con anana y mucha aceituna',
    image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
    price: 10,
    preparationTime: 30,
    healthScore: 100,
    vegan: true
  };

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((response) => {
      console.log(response);
    });
  }

}
