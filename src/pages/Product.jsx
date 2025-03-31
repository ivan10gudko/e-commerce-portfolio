import ProductDetails from "../ui/ProductDetails";
import ProductImageContainer from "../ui/ProductImageContainer";
import ProductSidebar from "../ui/ProductSidebar";


function Product() {
  
  return (
    <div className="bg-productGray py-10">
    <div className="lg:flex ">
      <div className="w-full lg:w-3/5">
      <ProductImageContainer /> 
      </div>
      <div className=" w-full lg:w-2/5 flex justify-center md:block">
        <ProductSidebar />
      </div>
    </div>
    <ProductDetails/>
    </div>
  );
}

export default Product;
