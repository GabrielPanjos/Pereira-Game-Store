import { CardButton } from "./CardButton";

type ProductCardProps = {
  productName: string;
  price: number;
  image: string;
};

export function ProductCard({ productName, price, image }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded border border-gray-300 items-center bg-white h-100 w-75">
      <div className="w-full h-60 flex items-center justify-center">
        <img className="h-40" src={image} />
      </div>
      <div className="pl-5 pr-5 h-40 w-full justify-between flex flex-col">
        <div className="flex flex-col">
          <span className="font-bold text-[20px]">{productName}</span>
          <span className="font-bold text-[16px] text-sky-900">R${price}</span>
        </div>
        <div className="mb-5">
          <CardButton />
        </div>
      </div>
    </div>
  );
}
