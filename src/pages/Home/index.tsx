import { MainTemplate } from "../../templates/MainTemplate";
import { Products } from "../../components/Products";

export function Home() {
  return (
    <MainTemplate>
      <div className="flex flex-col items-center">
        <Products />
      </div>
    </MainTemplate>
  );
}
