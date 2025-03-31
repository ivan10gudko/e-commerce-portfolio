import { useState } from "react";
import Button from "./Button";

function CartItemConfigurationList({ selectedAttributes }) {
  let keysArr = Object.keys(selectedAttributes);
  const isLong = keysArr.length > 3;

  const [isVisilble, setIsVisible] = useState(!isLong);

  return (
    <div className="font-urbanist capitalize">
      {isLong ? (
        <>
          {keysArr.slice(0, 2).map((key) => (
            <Attribute key={key} attr={key} value={selectedAttributes[key]} />
          ))}
          {isVisilble
            ? keysArr
                .slice(2)
                .map((key) => (
                  <Attribute
                    key={key}
                    attr={key}
                    value={selectedAttributes[key]}
                  />
                ))
            : null}
            <Button
            type="text-only"
            className=" hover:text-black/20 px-0"
            color="rgba(0,0,0,0.8)"
            action={() => setIsVisible((v) => !v)}
          >
            {isVisilble?"Hide":"View all"}
          </Button><br/>
        </>
      ) : (
        keysArr.map((key) => (
          <Attribute key={key} attr={key} value={selectedAttributes[key]} />
        ))
      )}
    </div>
  );
}

function Attribute({attr, value}) {
  return (
    <>
      <span>
        {attr} : {value}
      </span>
      <br />
    </>
  );
}
export default CartItemConfigurationList;
