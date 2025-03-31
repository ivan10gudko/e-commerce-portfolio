import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import AttributeValue from "./AttributeValue";

function AttributeGroup({ attrId, attrValue, childAttributes, children }) {
  const { selectedAttributes } = useContext(ProductContext);

  let selectedChild = childAttributes.values.find(v=> v.value === selectedAttributes[childAttributes.id]);
  return (
    <div >
      <div className="flex justify-between items-center px-1 font-medium">
        <span>{children}</span>
        <span className="text-black/40 text-xs">
          {selectedChild?.displayValue}
        </span>
      </div>
      <div className="py-6 flex gap-2 flex-wrap">
        {childAttributes.values.map((v, i) => (
          <AttributeValue
            key={v.value + i}
            attrId={childAttributes.id}
            attrValue={v.value}
            group={attrId}
            groupValue={attrValue}
          >
            {v.displayValue}
          </AttributeValue>
        ))}
      </div>
    </div>
  );
}

export default AttributeGroup;
