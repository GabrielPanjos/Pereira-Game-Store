import { Gamepad2, Disc3, Keyboard, Armchair, Package } from "lucide-react";

import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-22 w-full h-25 bg-sky-950">
      <MenuButton Icon={Gamepad2}>Consoles</MenuButton>
      <MenuButton Icon={Disc3}>Jogos</MenuButton>
      <MenuButton Icon={Keyboard}>Periféricos</MenuButton>
      <MenuButton Icon={Armchair}>Móveis</MenuButton>
      <MenuButton Icon={Package}>Colecionáveis</MenuButton>
    </nav>
  );
}
