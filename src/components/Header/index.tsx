import { CircleUserRound, Phone, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { HeaderButton } from "./HeaderButton";

export function Header() {
  return (
    <header className="w-full h-30 justify-between flex items-center bg-slate-900">
      <div className="flex ml-15">
        <Link
          to="/"
          className="text-slate-100 w-[120px] flex justify-center items-center"
        >
          <img src="/logo/logo.png" />
        </Link>
      </div>
      <div className="flex mr-15 gap-30">
        <div className="flex gap-4">
          <HeaderButton to="/search" Icon={Search} />
          <HeaderButton to="/cart" Icon={ShoppingCart} />
        </div>
        <HeaderButton to="/contact" Icon={Phone}>
          Contato
        </HeaderButton>
        <HeaderButton to="/login" Icon={CircleUserRound}>
          Login
        </HeaderButton>
      </div>
    </header>
  );
}
