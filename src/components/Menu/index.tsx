import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <nav className="flex justify-center items-center gap-20 w-full h-18 bg-sky-100">
      <MenuButton>Produto</MenuButton>
    </nav>
  );
}
