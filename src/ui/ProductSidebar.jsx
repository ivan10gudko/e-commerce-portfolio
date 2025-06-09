import ProductAttributes from "./ProductAttributes";
import Price from "./Price";
import ProductTitle from "./ProductTitle";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Quantity from "./Quantity";
import Button from "./Button";
import toast from "react-hot-toast";

function ProductSidebar(){
  const {name,addProductToCart , price ,discount} = useContext(ProductContext);
  return (
    <div className="border-[1px] w-full p-6 md:w-[90%] md:mr-[10%] rounded border-black/10 ">
      <div className="border-b-[1px] border-b-black/20 py-3">
        <ProductTitle>{name}</ProductTitle>
        <Price price={price} discountId={discount}/>
      </div>
      <ProductAttributes />
      <Quantity />
      <Button
        type="fill"
        bgColor="black"
        color="white"
        className=" w-full py-4 text-xl font-semibold"
        action={()=>{
          addProductToCart();
          toast.success("Product successfully added to cart")

        }}
      >
        Add to Card
      </Button>
    </div>
  );
}

export default ProductSidebar;
