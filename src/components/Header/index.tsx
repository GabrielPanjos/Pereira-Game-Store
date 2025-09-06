import { CircleUserRound, Phone, ShoppingCart, Search } from "lucide-react";

import { HeaderButton } from "./HeaderButton";

export function Header() {
  return (
    <header className="w-full h-30 justify-between flex items-center bg-slate-900">
      <div className="flex ml-15">
        <button className="text-slate-100 text-[28px]">
          Pereira Game Store
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
