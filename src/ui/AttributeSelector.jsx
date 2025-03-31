import { useState } from "react";
import AttributeValue from "./AttributeValue";
import AttributeSelectorTitle from "./AttributeSelectorTitle";
import AttributeGroup from "./AttributeGroup";

export default function AttributeSelector({
  childAttributes,
  attribute,
  selectedAttribute,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function childAttrValues(attrValue){
    let result = Object.assign({},childAttributes);
    result.values =  result.values.filter(
      (v) => v.groupValue === attrValue
    )
    return result;
  } 

  return (
    <div className="font-urbanist divide-y divide-black/20">
      <AttributeSelectorTitle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedAttr={selectedAttribute}
      >
        {attribute.displayName}
      </AttributeSelectorTitle>
      {isOpen ? (
        childAttributes ? (
          <div className="py-6 divide-y-[1px] divide-black/20">
            {attribute.values.map((v, i) => (
              <AttributeGroup
                key={v.value + i}
                attrId={attribute.id}
                attrValue={v.value}
                childAttributes={childAttrValues(v.value)}
              >
                {v.displayValue}
              </AttributeGroup>
            ))}
          </div>
        ) : (
          <div className="py-6 flex gap-2 flex-wrap">
            {attribute.values.map((v, i) => (
              <AttributeValue
                key={v + i}
                attrId={attribute.id}
                attrValue={v.value}
                selected={v.value == selectedAttribute}
              >
                {v.displayValue}
              </AttributeValue>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}
