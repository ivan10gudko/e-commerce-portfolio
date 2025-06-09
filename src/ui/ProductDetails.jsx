import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductDetailsSummary from "./ProductDetailsSummary";
import ProductDetailsList from "./ProductDetailsList";

function ProductDetails() {
    const{details} = useContext(ProductContext);
    return (
    <>
    <div className=" py-4 mt-16 mx-[5%] text-4xl border-y font-semibold px-5">Details</div>
    <div className="lg:flex lg:justify-evenly lg:mt-10 font-urbanist font-medium text-black/80 px-5">    
       <ProductDetailsSummary details={details[0]}/>
       <ProductDetailsList list={details[1]}/>
    </div>
    </>  );
}

export default ProductDetails;