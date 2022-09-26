import { Component, OnInit } from '@angular/core';
// import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    // this.recipesService.getRecipes().subscribe((response) => {
    //   console.log(response);
    // });
  }

}
