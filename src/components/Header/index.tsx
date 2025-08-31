import logo from "../../assets/logo.avif";
import { AccontSec } from "../AccontSec";

import { Cart } from "../Cart";
import { Contact } from "../Contact";
import { SearchBar } from "../SearchBar";

export function Header() {
  return (
    <div className="w-full h-30 justify-between flex items-center bg-sky-300">
      <div className="flex ml-15">
        <img className=" h-20" src={logo} alt="" />
      </div>
      <div className="flex mr-15 gap-30">
        <div className="flex gap-4">
          <SearchBar />
          <Cart />
        </div>
        <Contact />
        <AccontSec />
      </div>
    </div>
  );
}
