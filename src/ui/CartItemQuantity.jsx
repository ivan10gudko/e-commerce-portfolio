import { useCart } from "../context/CartContext";

function CartItemQuantity({ quantity, id }) {
  const { setCartQuantity } = useCart();

  function handleChange(e) {
    if (e.target.value > 0) {
      setCartQuantity(id, Number(e.target.value));
    }
  }
  return (
    <form className="my-4 font-urbanist font-medium ">
      <label htmlFor="quantityInput">Quantity:</label>
      <input
        className="w-12 text-sm border-[1px] border-black/20 focus:border-black/50 mx-3 py-1 px-2 tetx-black/30 rounded"
        name="quantityInput"
        type="number"
        value={quantity}
        onChange={handleChange}
      />
    </form>
  );
}

export default CartItemQuantity;
