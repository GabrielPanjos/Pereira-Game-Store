import { ProductCard } from "../ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../../../data/Products/Products";

export function ShowProductsCards() {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = products.filter(
    (product) =>
      !category?.toUpperCase() ||
      product.category.toUpperCase() === category.toUpperCase()
  );

  return (
    <div>
      <div className="h-full justify-center flex flex-wrap gap-10">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ProductCard
                price={product.price}
                image={product.image}
                productName={product.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
