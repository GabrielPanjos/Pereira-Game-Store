import logo from "../../assets/logo.avif";
import { AccontSec } from "../AccontSec";

import { Cart } from "../Cart";
import { SearchBar } from "../SearchBar";

export function Header() {
  return (
    <div className="w-full h-30 justify-between flex items-center bg-sky-300">
      <img className="ml-15 h-20" src={logo} alt="" />
      <div className="flex">
        <div className="flex mr-50 gap-4">
          <SearchBar />
          <Cart />
        </div>
        <AccontSec />
      </div>
    </div>
  );
}
