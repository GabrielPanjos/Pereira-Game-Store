import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-20 w-full h-18 bg-sky-950">
      <MenuButton>Consoles</MenuButton>
      <MenuButton>Jogos</MenuButton>
      <MenuButton>Periféricos</MenuButton>
      <MenuButton>Móveis</MenuButton>
      <MenuButton>Colecionáveis</MenuButton>
    </nav>
  );
}
