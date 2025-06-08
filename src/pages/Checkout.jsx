import { useState } from "react";
import CheckoutFooter from "../ui/CheckoutFooter";
import CheckoutForm from "../ui/CheckoutForm";
import CheckoutHeader from "../ui/CheckoutHeader";
import CheckoutProducts from "../ui/CheckoutProducts";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../ui/ScrollToTop";

export default function Checkout(){
    const [deliveryPrice, setDeliveryPrice] = useState(80);
    
    return(<>
        <Toaster/>
        <ScrollToTop/>
        <CheckoutHeader/>
        <div className="flex ">
        <div className="px-4 md:px-14 lg:pl-20 lg:pr-10 pt-8 border w-full lg:w-3/5">
        <CheckoutForm deliveryPrice={deliveryPrice} setDeliveryPrice={setDeliveryPrice}/>
        <CheckoutFooter/>
        </div>
        <CheckoutProducts deliveryPrice={deliveryPrice}/>
        </div>
        </>
    )
}