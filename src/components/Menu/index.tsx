import { Gamepad2, Disc3, Keyboard, Armchair, Package } from "lucide-react";

import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-22 w-full h-25 bg-sky-950">
      <MenuButton to="/" filterCategory="" Icon={Package}>
        Todos
      </MenuButton>
      <MenuButton
        to="/category/consoles"
        filterCategory="Console"
        Icon={Gamepad2}
      >
        Consoles
      </MenuButton>
      <MenuButton to="/category/jogos" filterCategory="Jogo" Icon={Disc3}>
        Jogos
      </MenuButton>
      <MenuButton
        to="/category/perifericos"
        filterCategory="Periferico"
        Icon={Keyboard}
      >
        Periféricos
      </MenuButton>
      <MenuButton to="/category/moveis" filterCategory="Movel" Icon={Armchair}>
        Móveis
      </MenuButton>
      <MenuButton
        to="/category/colecionaveis"
        filterCategory="Colecionavel"
        Icon={Package}
      >
        Colecionáveis
      </MenuButton>
    </nav>
  );
}
