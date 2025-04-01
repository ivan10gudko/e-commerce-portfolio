import { BounceLoader } from "react-spinners";
import { useProductCard } from "../hooks/useProductCard";
import Error from "./Error";
import CartItemPrice from "./CartItemPrice";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorOutline } from "@mui/icons-material";
import Price from "./Price";
import { useNavigate } from "react-router";

function Card({ id }) {
  
  const { isLoading, product, error } = useProductCard(id);
  const navigate  = useNavigate();

  if (isLoading) {
    return (
      <div className="py-10 rounded-sm shadow-sm animate-pulse hover:scale-105">
        <div
          className=" pb-[135%]  h-fit rounded overflow-hidden bg-gray-200
          relative
              "
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <BounceLoader />
          </div>
        </div>

        <div className="text-black/70 font-semibold text-sm sm:text-[0.9rem] tracking-wide [word-spacing:0.1rem]  font-urbanist capitalize pt-4 px-4">
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }


  if (error || !product) {
    console.log(product);
     return (
       <div className="py-10 rounded-sm hover:scale-105">
         <div
           className=" pb-[135%]  h-fit rounded overflow-hidden bg-red-100/80 border-2 border-red-700  
           relative
               "
         >
           <ErrorOutline
             color="error"
             fontSize="large"
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           />
        </div>

        <div className="text-black/70 font-semibold text-sm sm:text-[0.9rem] tracking-wide [word-spacing:0.1rem]  font-urbanist capitalize pt-4 ">
          <h4 className="text-red-700">Error Loading Product</h4>
          <p className="text-sm">Please try again later.</p>
        </div>
      </div>
    );
  }


  const { productId, image, price, name, discount } = product;
  
  return (
    <div className="py-10 rounded-sm shadow-sm hover:scale-110 hover:shadow cursor-pointer " onClick={()=>navigate(`/shop/product/${productId}`)}>
      <figure
        className=" group relative pb-[135%]  h-fit rounded-sm overflow-hidden 
                            before:content-[''] before:absolute before:inset-0 before:bg-productGray before:z-0
            "
      >
        <img
          src={image[0]}
          alt={name}
          className={` absolute top-[20%] left-[5%] w-[90%] h-[60%] object-contain transition-opacity z-10 ${image[1] ?"duration-500  group-hover:opacity-0" : ""}`}
        />
        {image[1] ? (
          <img
            src={image[1]}
            alt={name}
            aria-hidden="true"
            className="absolute top-[20%] left-[5%] w-[90%] h-[60%] object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        ) : null}
      </figure>

      <div className="text-black/70 font-semibold text-sm sm:text-[0.9rem] tracking-wide [word-spacing:0.1rem]  font-urbanist capitalize pt-4 px-4">
        <h4>{name}</h4>
        <Price price={price} discountId={discount} card/>
      </div>
    </div>
  );
}
//
export default Card;
