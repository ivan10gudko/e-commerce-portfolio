import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useDiscount } from "../hooks/useDiscount";

function Price({price,discountId,card}) {
  const { isLoading, discount, error } = useDiscount(discountId);

  if (discount === null || error || isLoading || !discount.active) {
    return <h3 className={card ? `text-md text-black/75 font-urbanist`:`text-xl text-black/90 font-gelasio`}>${price}</h3>;
  }

  let discountPrice = Math.round((price * (100 - discount.percent)) / 100);
  return (
    <>
      <h3 className={card ? `text-md text-black/70 font-urbanist`:`text-xl text-black/90 font-gelasio`}>
        <s className="text-black/70">${price}</s>
        <span className="text-red-600/90 mx-4">${discountPrice} </span>
        <span className=" text-red-500/90 text-sm">({discount.percent}% off)</span>
      </h3>
      {!card ? <h3 className="text-red-500/90 text-md"> {discount.description}</h3> : null }
    </>
  );
}

export default Price;
