import { ShowProductPage } from "../../components/Products/ShowProductPage";
import { MainTemplate } from "../../templates/MainTemplate";

export function ProductPage() {
  return (
    <MainTemplate>
      <div>
        <ShowProductPage productId={1} />
      </div>
    </MainTemplate>
  );
}
