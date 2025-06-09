import { useContext } from "react";
import Button from "./Button";
import { ProductContext } from "../context/ProductContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Quantity() {
    const {quantity,setQuantity} = useContext(ProductContext);
    return (<div className="flex justify-between border-t-[1px] border-black/30 py-4 items-center">
        <span className="font-semibold font-urbanist ">Quаntity</span>
        <div className="flex gap-6 items-center ">
            <Button action={()=>setQuantity(q=> q-1 || 1)} className="w-10 h-10 border-[1px]" color={quantity<=1?"rgba(0,0,0,0.5)":"black"} >
                <RemoveIcon fontSize="small"/>
            </Button>
            <span>{quantity}</span>
            <Button action={()=>setQuantity(q=>q+1)} className="w-10 h-10 border-[1px]">
                <AddIcon fontSize="small"/>
            </Button>
        </div>

    </div>  );
}

export default Quantity;