import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Products } from "../../components/Products";

export function Home() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center">
      <Header />
      <Menu />
      <Products />
    </div>
  );
}
