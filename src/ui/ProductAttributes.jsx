import { useContext, useState } from "react";
import AttributeSelector from "./AttributeSelector";
import { ProductContext } from "../context/ProductContext";

function ProductAttributes() {
  const {attributes, selectedAttributes } = useContext(ProductContext);
  function getSelectedAttr(attrId) { 
    return selectedAttributes[attrId];
  }
  return (
    <div className="divide-y divide-black/20">
      {attributes.map((v, i) => {
        if (!v.group) {
          return (
            <AttributeSelector
              key={v.id + i}
              attribute={v}
              selectedAttribute={getSelectedAttr(v.id)}
              childAttributes={attributes.find((item)=>item.group === v.id)}
            />
          );
        }
      })}
    </div>
  );
}

export default ProductAttributes;
