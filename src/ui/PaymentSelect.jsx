import { useState, useEffect } from "react";
import Input from "./Input";
import Option from "./Option";
import { isValidCardNumber, isValidExpiry } from "../utils/Payment";

const CARD_ICONS = [
  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg",
  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg",
  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg",
  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/discover.C7UbFpNb.svg",
];

function PaymentSelect({handleChange,cardData,setCardData}) {
  const [selectedOption, setSelectedOption] = useState("card");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    if (cardData.cardNumber && !isValidCardNumber(cardData.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (cardData.expiry && !isValidExpiry(cardData.expiry)) {
      newErrors.expiry = "Invalid date";
    }

    if (cardData.cvc && !/^\d{3,4}$/.test(cardData.cvc)) {
      newErrors.cvc = "Invalid CVC";
    }

    if (cardData.name.trim() === "") {
      newErrors.name = "Required";
    }

    setErrors(newErrors);
  }, [cardData]);

  return (
    <div>
      <h3 className="text-black/60 mb-4 mt-2 text-sm font-urbanist tracking-wide">
        All transactions are secure and encrypted.
      </h3>
      <Option
        title="Credit Card"
        checked={selectedOption === "card"}
        onSelect={() =>{
          setSelectedOption("card")
          handleChange("card")
        } }
        isFirst
        icons={CARD_ICONS}
      >
        <form className="px-6 py-4">
          <Input
            type="text"
            name="cardNumber"
            autoComplete="cc-number"
            required
            value={cardData.cardNumber}
            handleChange={(v) => setCardData(d=>({...d,v}))}
            error={errors.cardNumber}
          >
            Card number
          </Input>

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="expiry"
              pattern="[0-9\s/]*"
              autoComplete="cc-exp"
              required
              value={cardData.expiry}
              handleChange={(v) => setCardData(d=>({...d,expiry:v}))}
              error={errors.expiry}
            >
              Expiration date (MM / YY)
            </Input>
            <Input
              type="text"
              name="cvc"
              pattern="[0-9]*"
              inputMode="numeric"
              autoComplete="cc-csc"
              required
              value={cardData.cvc}
              handleChange={(v) => setCardData(d=>({...d,cvc:v}))}
              error={errors.cvc}
            >
              Security code
            </Input>
          </div>

          <Input
            type="text"
            name="cardholderName"
            autoComplete="cc-name"
            required
            value={cardData.name}
            handleChange={(v) => setCardData(d=>({...d,name:v}))}
            error={errors.name}
          >
            Name on card
          </Input>
        </form>
      </Option>
      <Option
        title="Сash on delivery"
        isLast
        checked={selectedOption === "cash"}
        onSelect={() =>{
          setSelectedOption("cash")
          handleChange("cash")
        } }
      />
    </div>
  );
}

export default PaymentSelect;
