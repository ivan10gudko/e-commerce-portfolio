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

function PaymentSelect() {
  const [selectedOption, setSelectedOption] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    if (cardNumber && !isValidCardNumber(cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (expiry && !isValidExpiry(expiry)) {
      newErrors.expiry = "Invalid date";
    }

    if (cvc && !/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = "Invalid CVC";
    }

    if (name.trim() === "") {
      newErrors.name = "Required";
    }

    setErrors(newErrors);
  }, [cardNumber, expiry, cvc, name]);

  return (
    <div>
      <h3 className="text-black/60 mb-4 mt-2 text-sm font-urbanist tracking-wide">
        All transactions are secure and encrypted.
      </h3>
      <Option
        title="Credit Card"
        checked={selectedOption === "creditCard"}
        onSelect={() => setSelectedOption("creditCard")}
        isFirst
        icons={CARD_ICONS}
      >
        <form className="px-6 py-4">
          <Input
            type="text"
            name="cardNumber"
            autoComplete="cc-number"
            required
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
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
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
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
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          >
            Name on card
          </Input>
        </form>
      </Option>
      <Option
        title="Сash on delivery"
        isLast
        checked={selectedOption === "Cash"}
        onSelect={() => setSelectedOption("Cash")}
      />
    </div>
  );
}

export default PaymentSelect;
