import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { environment } from 'src/environments/environment';

export type RecipesResponse = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  endpoint = environment.recipes.completeEndPoint;

  constructor(private httpClient: HttpClient) {}

  getRecipes() {
    return this.httpClient.get<RecipesResponse>(this.endpoint + '&addRecipeInformation=true&addRecipeNutrition=true');
  }
}
