import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ThumbImage({image}) {
    const {name} = useContext(ProductContext);
    return (
    <figure className="w-full h-full relative cursor-pointer hover:border-2 hover:brightness-90">
        <img src={image} alt={name} className="absolute w-full h-full top-0 left-0 object-cover"/>
    </figure>);
}

export default ThumbImage;