import { Product } from "../models/Product";

export const products: Product[] = [
  new Product(
    1,
    "Console PlayStation 5",
    5499.99,
    "Console",
    "Console PlayStation 5 Pro",
    "productsImages/consoles/playstation5.png"
  ),
  new Product(
    2,
    "Fortrek PRO M7 RGB",
    119.99,
    "Periferico",
    "Mouse Fortrek PRO M7 RGB - gamer preto",
    "productsImages/perifericos/fortrekM7.png"
  ),
  new Product(
    3,
    "Steam Gift Card",
    59.99,
    "Jogo",
    "Steam Gift Card de R$50",
    "productsImages/jogos/giftCardSteam50.png"
  ),
  new Product(
    4,
    "Console Xbox Series X",
    5699.99,
    "Console",
    "Console Xbox Series X Preto",
    "productsImages/consoles/xboxSeriesX.png"
  ),
];
