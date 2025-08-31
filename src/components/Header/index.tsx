import logo from "../../assets/logo.avif";

import { CircleUserRound, Phone, ShoppingCart, Search } from "lucide-react";

// Componentes
import { HeaderButton } from "./HeaderButton";

export function Header() {
  return (
    <header className="w-full h-30 justify-between flex items-center bg-sky-300">
      <div className="flex ml-15">
        <button>
          <img className=" h-20" src={logo} alt="" />
        </button>
      </div>
      <div className="flex mr-15 gap-30">
        <div className="flex gap-4">
          <HeaderButton Icon={Search} />
          <HeaderButton Icon={ShoppingCart} />
        </div>
        <HeaderButton Icon={Phone}>Contato</HeaderButton>
        <HeaderButton Icon={CircleUserRound}>Login</HeaderButton>
      </div>
    </header>
  );
}
