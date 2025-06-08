import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import Button from "./Button";
import { memo, useMemo } from "react";
import { Pagination } from "swiper/modules";

function scrollUp(){
    window.scrollTo({top:400,behavior:"smooth"});
  }
function ProductPagination({
  products,
  paginationPosition,
  setPaginationPosition,
  slidesPerView,
}) {

  function handleNext() { 
    const {start , end} = paginationPosition;
    if(end>=products.length){
        return;
    }else if(end+slidesPerView >= products.length){
        setPaginationPosition({start:start + slidesPerView, end: products.length + 1})
    } else{
        setPaginationPosition({start:start + slidesPerView, end: end + slidesPerView})
    }
    scrollUp();
  }
  function handlePrev() {
    const {start , end} = paginationPosition;
    if(start==0){
      return;
    }else if(start-slidesPerView <= 0 ){
      setPaginationPosition({start:0, end: products.length <= slidesPerView ? products.length + 1 : slidesPerView})
    } else{
      setPaginationPosition({start:start - slidesPerView, end: end - slidesPerView})
    }
    
    scrollUp()

    // setPaginationPosition((p) => ({
    //   start: p.start - slidesPerView+1 < 0 ? 0 : p.start - slidesPerView+1,
    //   end:
    //     p.end - slidesPerView < p.start - 1
    //       ? products.length > slidesPerView+1
    //         ? slidesPerView+1
    //         : products.length
    //       : p.end - slidesPerView,
    // }));
  }
  function handleSetCurrent(index){
    const start = index * slidesPerView;
    let end = start + slidesPerView;
    end = end >= products.length ? products.length+1 : end;
    setPaginationPosition({start:start,end:end});
    scrollUp();
  }

  return (
    <div className="w-full flex items-center justify-center col-span-full py-2 ">
      <Button action={handlePrev} type="text-only">
        <NavigateBeforeRounded fontSize="large" />
      </Button>
      {Array.from({length:Math.ceil(products.length / slidesPerView)},(v,i) => i).map((el)=>{
      return <span className={"text-black text-lg font-urbanist  rounded-sm  cursor-pointer px-4 mx-[1px] hover:border hover:mx-0 "+(paginationPosition.start == slidesPerView*el ?" border-black border disabled: mx-0":"")} key={el} onClick={()=>handleSetCurrent(el)} >{el+1}</span>
      })}
      <Button action={handleNext} type="text-only">
        <NavigateNextRounded fontSize="large" />
      </Button>
    </div>
  );
}

export default ProductPagination;
