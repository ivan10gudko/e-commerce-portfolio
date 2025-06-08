import { useContext } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../ui/CartItem";
import { Link, useNavigate } from "react-router";
import Button from "../ui/Button";
import Subtotal from "./Subtotal";

function Cart() {
  let { products } = useCart();

  return (
    <div className="py-[20vh] font-surveyor lg:px-[20%] bg-productGray">
      <h1 className="text-5xl font-light w-full text-center my-10">My cart</h1>
      <div className="flex flex-col justify-center items-center ">
        {products.length == 0 ? (
          <>
            <span className="text-5xl font-light  text-center mb-10">
              {" "}
              Your Cart is Empty
            </span>
            <Link to="/shop" className="w-fit">
              <Button
                type="fill"
                bgColor="black"
                color="white "
                className="font-urbanist font-semibold text-lg px-5 "
              >
                Back to shop
              </Button>
            </Link>
          </>
        ) : (
          <>
            {/* <CheckButton /> */}
            {products.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
            <Subtotal products={products} />
            <CheckButton />
          </>
        )}
      </div>
    </div>
  );
}

function CheckButton() {
  let navigate = useNavigate();

  return (
    <Button
      type="fill"
      bgColor="black"
      color="white"
      action={()=>navigate("/checkout")}
      className="w-full font-urbanist font-bold  rounded-none py-4 uppercase"
    >
      continue to check out
    </Button>
  );
}

export default Cart;
