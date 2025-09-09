import { Product } from "../../models/Product/Product";

export const products: Product[] = [
  new Product(
    1,
    "Console PlayStation 5",
    4899.69,
    "Console",
    "Console PlayStation 5 Pro",
    "/productsImages/consoles/playstation5.png"
  ),
  new Product(
    2,
    "Fortrek PRO M7 RGB",
    139.52,
    "Periferico",
    "Mouse Fortrek PRO M7 RGB - gamer preto",
    "/productsImages/perifericos/fortrekM7.png"
  ),
  new Product(
    3,
    "Steam Gift Card",
    59.99,
    "Jogo",
    "Steam Gift Card de R$50",
    "/productsImages/jogos/giftCardSteam50.png"
  ),
  new Product(
    4,
    "Console Xbox Series X",
    5299.0,
    "Console",
    "Console Xbox Series X Preto",
    "/productsImages/consoles/xboxSeriesX.png"
  ),
  new Product(
    5,
    "Cadeira Gamer",
    531.98,
    "Movel",
    "Cadeira Gamer Vermelha",
    "/productsImages/moveis/cadeiraGamer.png"
  ),
];
