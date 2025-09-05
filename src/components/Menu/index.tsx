import { Gamepad2, Disc3, Keyboard, Armchair, Package } from "lucide-react";

import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-22 w-full h-25 bg-sky-950">
      <MenuButton filterCategory="" Icon={Gamepad2}>
        Todos
      </MenuButton>
      <MenuButton filterCategory="Console" Icon={Gamepad2}>
        Consoles
      </MenuButton>
      <MenuButton filterCategory="Jogo" Icon={Disc3}>
        Jogos
      </MenuButton>
      <MenuButton filterCategory="Periferico" Icon={Keyboard}>
        Periféricos
      </MenuButton>
      <MenuButton filterCategory="Movel" Icon={Armchair}>
        Móveis
      </MenuButton>
      <MenuButton filterCategory="Colecionavel" Icon={Package}>
        Colecionáveis
      </MenuButton>
    </nav>
  );
}
