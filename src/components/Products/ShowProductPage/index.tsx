import { products } from "../../../data/Products/Products";

type ShowProductPageProps = {
  productId: number;
};

export function ShowProductPage({ productId }: ShowProductPageProps) {
  const product = products.filter((product) => product.id === productId);

  return (
    <div>
      {product.map((product) => {
        return (
          <div>
            <div>
              <img src={product.image} />
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
