export class Recipe {
  id?: number;
  title: string;
  image: string;
  price: number;
  preparationTime: number;
  healthScore: number;
  vegan?: boolean;

  constructor(data: any) {
    if (!data) return;

    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.price = data.price;
    this.preparationTime = data.preparationTime;
    this.healthScore = data.healthScore;
    this.vegan = data.vegan;
  }
}
