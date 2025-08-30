import logo from "../../assets/logo.avif";

import { Cart } from "../Cart";
import { SearchBar } from "../SearchBar";

export function Header() {
  return (
    <div className="w-full h-30 flex items-center bg-sky-300">
      <img className="ml-15 h-20" src={logo} alt="" />
      <SearchBar />
      <Cart />
    </div>
  );
}
