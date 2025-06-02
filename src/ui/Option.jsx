import { ImportContactsSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Option({ title, checked = false, children, isFirst, isLast ,icons,onSelect}) {
  return (
    <div
      className={` bg-neutral-100 ${
        isFirst ? "rounded-t-xl" : isLast ? "rounded-b-xl" : null
      }`}
    >
      <div
        onClick={onSelect}
        className={`flex items-center justify-between gap-3 py-4 px-8 ${
          checked ? "border-neutral-800 border " : "border-neutral-500 border"
        } ${isFirst ? "rounded-t-xl" : isLast ? "rounded-b-xl border-t-0" : null}`}
      ><div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 border border-neutral-700 rounded-full ${
            checked ? " border-[0.35rem] p-[0.10rem] bg-inherit" : "w-4 h-4"
          }`}
        ></div>
        {title}
        </div>
        {icons && <div className="flex items-center gap-1">{icons.map((v,i)=><CardIcon image={v} key={i} />)}</div>}
      </div>
      {checked ? (
        <div
          className={
            checked&&children
              ? "border-neutral-800 border "
              : "border-neutral-100 border"
          }
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function CardIcon({image}){
return(
  <img src={image} className="w-10 h-6"/>
)
}
export default Option;
