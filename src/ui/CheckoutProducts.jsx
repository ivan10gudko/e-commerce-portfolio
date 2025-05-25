import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import CheckoutItemCard from "./CkeckoutItemCard";
const DiliveryPrice = 56
function CheckoutProducts() {
  let { products } = useCart();
  const subtotal = useMemo(() => {
    return products.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,0);
  }, [products]);
  return (
    <div className="py-2 px-4 w-full lg:w-2/5 bg-productGray">
      <div className="divide-y">
        {products.map((p) => (
          <CheckoutItemCard product={p} key={p.id} />
        ))}
      </div>
      <div className="border-t py-3 px-4 w-full *:flex *:justify-between font-urbanist font-semibold">
        <div>
          Subtotal <span className="font-normal">${subtotal}</span>
        </div>
        <div>
          Delivery <span className="font-normal">${DiliveryPrice}</span>
        </div>
        <div className="text-xl font-bold mt-4">
          Total <span>${subtotal+DiliveryPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProducts;
