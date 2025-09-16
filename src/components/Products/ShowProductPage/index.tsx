import { products } from "../../../data/Products/Products";
import { CardButton } from "../ProductCard/CardButton";
import { useParams } from "react-router-dom";

export function ShowProductPage() {
  const { product } = useParams<{ product: string }>();

  const currentProduct = products.filter(
    (p) => !p?.id.toString() || p.id.toString() === product
  );

  return (
    <div>
      {currentProduct.map((product) => {
        return (
          <div className="flex flex-row rounded h-180 p-5 w-full bg-sky-950">
            <div className="flex rounded justify-center items-center w-[50%]">
              <img className="w-[50%] h-[50%] " src={product.image} />
            </div>
            <div className="flex flex-col justify-end w-[50%] rounded border border-gray-300 bg-gray-100 text-slate-100 p-5">
              <span className="font-medium text-2xl text-slate-900">
                {product.name}
              </span>
              <span className="font-medium text-[18px] text-slate-900">
                {product.description}
              </span>
              <span className="font-bold text-3xl text-sky-900">
                R${product.price}
              </span>
              <CardButton>Comprar produto</CardButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
