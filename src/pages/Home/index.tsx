import { MainTemplate } from "../../templates/MainTemplate";
import { Products } from "../../components/Products";
import { ProductSpecial } from "../../components/ProductSpecial";

export function Home() {
  return (
    <MainTemplate>
      <div className="flex flex-col items-center">
        <ProductSpecial />
        <Products />
      </div>
    </MainTemplate>
  );
}
