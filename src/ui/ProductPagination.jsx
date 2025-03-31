import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import Button from "./Button";
import { memo, useMemo } from "react";


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

  return (
    <div className="w-full flex">
      <Button action={handlePrev} type="text-only">
        <NavigateBeforeRounded fontSize="large" />
      </Button>
      <Button action={handleNext} type="text-only">
        <NavigateNextRounded fontSize="large" />
      </Button>
    </div>
  );
}

export default ProductPagination;
