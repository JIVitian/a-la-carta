import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  endpoint = environment.recipes.completeEndPoint;

  constructor(private httpClient: HttpClient) {}

  getRecipes() {
    return this.httpClient.get(this.endpoint);
  }
}
