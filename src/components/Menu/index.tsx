import { Gamepad2, Disc3, Keyboard, Armchair, Package } from "lucide-react";

import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-22 w-full h-25 bg-sky-950">
      <MenuButton to="/" Icon={Package}>
        Todos
      </MenuButton>
      <MenuButton to="/category/consoles" Icon={Gamepad2}>
        Consoles
      </MenuButton>
      <MenuButton to="/category/jogos" Icon={Disc3}>
        Jogos
      </MenuButton>
      <MenuButton to="/category/perifericos" Icon={Keyboard}>
        Periféricos
      </MenuButton>
      <MenuButton to="/category/moveis" Icon={Armchair}>
        Móveis
      </MenuButton>
      <MenuButton to="/category/colecionaveis" Icon={Package}>
        Colecionáveis
      </MenuButton>
    </nav>
  );
}
