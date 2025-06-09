import { Payment, RememberMe } from "@mui/icons-material";
import Button from "./Button";
import Checkbox from "./Checkbox";
import CountrySelect from "./ContrySelect";
import Fieldset from "./Fieldset";
import Input from "./Input";
import PaymentSelect from "./PaymentSelect";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { isValidCardNumber, isValidExpiry } from "../utils/Payment";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import submitOrder from "../services/OrdersAPI";
import { useNavigate } from "react-router";

let initialState={
    customer: {
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
    },
    shippingAddress:{
        country:"",
        city:"",
        address:"",
        zip:"",
        company:"optional"
    },
    paymentMethod:"card",
    agreeToTerms: true,
    newsSubscription:false,
    total:0,

}
function CheckoutForm({deliveryPrice,setDeliveryPrice}) {
    const  navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: submitOrder,
            onSuccess: (data) => {
                toast.success('✅ Order submitted successfully!');
                navigate('/checkout/success')
            },
            onError: (error) => {
                console.error('❌ Order failed:', error.message)
                toast.error('❌ Failed to submit order.')
            }
    });

    const [formData, setFormData] = useState(initialState);
    const [cardData,setCardData] = useState({number:"",cvc:"",name:"",expiry:""});
    let { products } = useCart();
    console.log(products.length);
    
    const [saveInfo, setSaveInfo] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        
        const { customer, shippingAddress, agreeToTerms,paymentMethod } = formData;

        // 2. Базові перевірки
        if (!customer.firstName || !customer.lastName || !customer.email || !customer.phone) {
            toast.error("Please fill out all contact information fields.");
            return;
        }

        if (!shippingAddress.country || !shippingAddress.city || !shippingAddress.address || !shippingAddress.zip) {
            toast.error("Please fill in the delivery address.");
            return;
        }

  // 3. Формат email (простий RegExp)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(customer.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

  // 4. Формат телефону (наприклад, український)
        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneRegex.test(customer.phone)) {
            toast.error("Enter a valid phone number.");
            return;
        }

  // 5. Продукти
        if (!products || products.length === 0) {
            toast.error("There are no items in your cart.");
        return;
        }

  // 6. Угода з умовами
        if (!agreeToTerms) {
            toast.error("You must agree to the terms.");
            return;
        }

        if(paymentMethod==="card"){
            if (cardData.cardNumber && !isValidCardNumber(cardData.cardNumber)) {
                toast.error("Invalid card number");
                return;
            }

            if (cardData.expiry && !isValidExpiry(cardData.expiry)) {
                toast.error("Invalid date");
                return;
            }

            if (cardData.cvc && !/^\d{3,4}$/.test(cardData.cvc)) {
                toast.error("Invalid CVC");
                return;
            }

            if (cardData.name.trim() === "") {
                toast.error("Required");
                return;
            }
        }
        formData.products = products.map(v=>({id:v.id, productId:v.productId, quantity:v.quantity}));
        mutation.mutate(formData);
    }

    useEffect(() => {
        const savedData = localStorage.getItem("checkoutFormData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
            setSaveInfo(true);
        }
    }, []);

    useEffect(()=>{
        let country = formData.shippingAddress.country;
        if(country=="Ukraine") setDeliveryPrice(140);
        if(country=="USA") setDeliveryPrice(40);
        if(country=="Poland") setDeliveryPrice(100);
        if(country=="Canada") setDeliveryPrice(80);
        //etc.
    },[formData.shippingAddress.country,setDeliveryPrice]);

    useEffect(()=>{
        const subtotal = products.reduce((prev,curr)=>prev+=curr.quantity*curr.price,0);

        setFormData(data=>({...data,total:subtotal+deliveryPrice}))
    },[products,deliveryPrice]);

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset title="Contact">
                <Input name="email" type="email" required handleChange={(v)=>setFormData(data=>({...data,customer:{...data.customer,email:v}}))}>Email</Input>
                <Checkbox name="email-news-subscription" checked>Email me with news and offers</Checkbox>
            </Fieldset>
            <Fieldset title="Delivery">
            <div className="grid md:grid-cols-2 md:gap-4 my-1 *:*:my-1">
                <Input name="firstname" handleChange={(v)=>setFormData(data=>({...data,customer:{...data.customer,firstName:v}}))}>First name(optional)</Input>
                <Input name="lastname" required handleChange={(v)=>setFormData(data=>({...data,customer:{...data.customer,lastName:v}}))}>Last name</Input>
            </div>
            <CountrySelect selectedCountry={formData.shippingAddress.country} handleChange={(v)=>setFormData(data=>({...data,shippingAddress:{...data.shippingAddress,country:v}}))}/>
            <Input name="company" required handleChange={(v)=>setFormData(data=>({...data,shippingAddress:{...data.shippingAddress,company:v}}))}>Company (optional)</Input>
            <Input name="address" required handleChange={(v)=>setFormData(data=>({...data,shippingAddress:{...data.shippingAddress,address:v}}))}>Address</Input>
            <div className="grid md:grid-cols-2 md:gap-4 my-1 *:*:my-1">
                <Input name="city" required handleChange={(v)=>setFormData(data=>({...data,shippingAddress:{...data.shippingAddress,city:v}}))}>City</Input>
                <Input name="postal-code" required handleChange={(v)=>setFormData(data=>({...data,shippingAddress:{...data.shippingAddress,zip:v}}))}>Postal code</Input>
            </div>
            <Input name="phone" handleChange={(v)=>setFormData(data=>({...data,customer:{...data.customer,phone:v}}))} required>Phone</Input>
            <Checkbox
                name="save-form-data"
                checked={saveInfo}
                handleChange={(checked) => {
                    setSaveInfo(checked);
                    if (checked) {
                        localStorage.setItem("checkoutFormData", JSON.stringify(formData));
                    } else {
                        localStorage.removeItem("checkoutFormData");
                    }
            }}>Save this information for next time</Checkbox>
            </Fieldset>
            <Fieldset title="Payment">
                <PaymentSelect handleChange={(v)=>setFormData(data=>({...data,paymentMethod:v}))} cardData={cardData} setCardData={setCardData}>
                </PaymentSelect>
            </Fieldset>
            <div className="mb-8 mt-6">
                <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    handleChange={(checked) =>
                        setFormData((data) => ({ ...data, agreeToTerms: checked }))}
                >Agree to Terms and conditions</Checkbox>
            </div>
            <Button type="fill" bgColor="black" color="white" className="w-full py-4 text-xl font-semibold active:opacity-40">Pay now</Button>
        </form>
    );
}

export default CheckoutForm;