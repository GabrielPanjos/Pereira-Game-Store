export type Category =
  | "Jogos"
  | "Consoles"
  | "Perifericos"
  | "Moveis"
  | "Colecionaveis";

export class Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  images?: string[];

  constructor(
    id: number,
    name: string,
    price: number,
    category: Category,
    description: string,
    image: string,
    images?: string[]
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
    this.images = images;
  }
}
