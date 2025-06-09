import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductImage({ image, action }) {
  const {name} = useContext(ProductContext);
  return (
    <div className="w-full lg:w-4/5 mx-auto h-[60vh] relative ">
      <figure
        className="w-full mx-auto max-h-[60vh] flex justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
        onClick={action}
      >
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain cursor-pointer"
        />
      </figure>
    </div>
  );
}

export default ProductImage;
