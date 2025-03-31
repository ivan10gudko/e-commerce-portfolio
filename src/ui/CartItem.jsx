import Product from "../pages/Product";
import CartItemDescription from "./CartItemDescription";
import CartItemImage from "./CartItemImage";
import ProductImage from "./ProductImage";

function CartItem({ product }) {
  const { id, productId, name, price, image, quantity,selectedAttributes } = product;
  return (
    <div className="w-full grid grid-cols-[30%_55%_10%] gap-6 px-10 py-6 border-y-[1px] border-black/15 bg-productGray">
      <CartItemImage image={image} alt={name} />
      <CartItemDescription product = {{id,name,price,quantity,selectedAttributes}} />
    </div>
  );
}

export default CartItem;
