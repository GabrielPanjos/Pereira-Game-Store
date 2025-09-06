export type Category =
  | "Jogo"
  | "Console"
  | "Periferico"
  | "Movel"
  | "Colecionavel";

export class Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: string;

  constructor(
    id: number,
    name: string,
    price: number,
    category: Category,
    description: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
  }
}
