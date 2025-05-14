import CheckoutFooter from "../ui/CheckoutFooter";
import CheckoutForm from "../ui/CheckoutForm";
import CheckoutHeader from "../ui/CheckoutHeader";
import CheckoutProducts from "../ui/CheckoutProducts";

export default function Checkout(){
    return(<>
        <CheckoutHeader/>
        <div className="flex ">
        <div className="px-4 md:px-14 lg:pl-20 lg:pr-10 py-8 border w-full lg:w-3/5">
        <CheckoutForm/>
        <CheckoutFooter/>
        </div>
        <CheckoutProducts />
        </div>
        </>
    )
}