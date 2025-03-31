import { useCart } from "../context/CartContext";
import Button from "./Button";

function RemoveButton({id}) {
    const {removeProduct} = useCart();

    function handleClick(){
        removeProduct(id);
    }

    return (<Button type="text-only" action={handleClick} className="underline font-urbanist  bottom-0 px-0">
        Remove
    </Button>);
}

export default RemoveButton;