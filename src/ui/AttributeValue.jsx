import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const basePath =
  "https://bnapsbenicdngdtbjbhf.supabase.co/storage/v1/object/public/attributes_images/";
function AttributeValue({ attrId, attrValue, group, groupValue, children ,selectable}) {
  const { selectedAttributes, setAttribute } = useContext(ProductContext);
  const selected = selectedAttributes[attrId] === attrValue;

    let imagePath = attrId==='color' ? basePath + attrValue + ".png": false;

    function handleClick(){
      if(!selectable) return;
      let newAttributes = group ? {[attrId]:attrValue,[group]:groupValue} : {[attrId]:attrValue};
      setAttribute(newAttributes);
    }
    return (
      <div className="group relative cursor-pointer transition-all delay-75" onClick={handleClick}>
        { attrId == "color" ?
        <>
        <div
          className={`size-11 rounded-full bg-center font-extrabold ring-black/70 ring-1  flex justify-center items-center ${
            selected
              ? "ring-offset-2 hover:ring-offset-2 hover:ring-2"
              : "ring-offset-1 hover:ring-offset-2"
          } ${ !selectable ? "backdrop-grayscale cursor-not-allowed" : " "}`}
          style={{ backgroundImage: `url("${imagePath}")` }}
        >
          {selected ? (
            <CheckRoundedIcon className="text-white " sx={{ fontSize: 14 }} />
          ) :( selectable?null:<NotInterestedIcon sx={{ fontSize: 14 }} className="text-white "/>)}
        </div>
        <span className={`absolute hidden group-hover:inline  text-nowrap left-1/2 transform -translate-x-1/2 text-[0.5rem] text-black/60 top-12 `}>
          {children}
        </span>
        </>
      
  :
    <button
      className={`px-6 py-2 ring-1 text-sm font-urbanist rounded-lg font-medium ${
        selected
          ? "bg-black/90 text-white ring-white hover:bg-black/70"
          : " ring-black/40 bg-productGray hover:ring-black/80"
      } ${!selectable?  "backdrop-grayscale cursor-not-allowed hover:border-red-400 hover:ring-red-600" : " " }`}
    >
      {children}
    </button>}
   </div>
);

}
export default AttributeValue;
