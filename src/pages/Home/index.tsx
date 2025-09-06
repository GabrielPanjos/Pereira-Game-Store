import { MainTemplate } from "../../templates/MainTemplate";
import { Products } from "../../components/Products";

export function Home() {
  return (
    <div className="h-full w-full bg-slate-100 flex flex-col items-center">
      <MainTemplate>
        <Products />
      </MainTemplate>
    </div>
  );
}
