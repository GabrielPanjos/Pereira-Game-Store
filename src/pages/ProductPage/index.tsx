import { ShowProductPage } from "../../components/Products/ShowProductPage";
import { MainTemplate } from "../../templates/MainTemplate";

export function ProductPage() {
  return (
    <MainTemplate>
      <div className="flex justify-center items-center">
        <div className="mt-10 mb-10 w-350 rounded border border-gray-300">
          <ShowProductPage />
        </div>
      </div>
    </MainTemplate>
  );
}
