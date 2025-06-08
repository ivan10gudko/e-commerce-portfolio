import { BounceLoader } from "react-spinners";
import { useCategoryProducts } from "../hooks/useCategoryProducts";
import Error from "./Error";
import Card from "./Card";
import { useEffect, useMemo, useState } from "react";
import ProductPagination from "./ProductPagination";

function ProductGrid({selectedCategories}) {
    const [paginationPosition,setPaginationPosition] = useState({start:0,end:0})
    const { isLoading, products, error } = useCategoryProducts(selectedCategories);
    const SLIDES_PER_VIEW = useMemo(()=>{
       if(window.innerWidth>=768 && window.innerWidth<1024){
           return 21;
       }else if(window.innerWidth>=1280){
           return 54;
       }else{
           return 24;
       }
   },[])

    useEffect(()=>{
      if(!isLoading&&!error){
        setPaginationPosition((p)=>({...p , end:products.length> SLIDES_PER_VIEW ? SLIDES_PER_VIEW  : products.length}));
      }

    },[isLoading,products,error,SLIDES_PER_VIEW]);


      if (isLoading) {
        return <BounceLoader />;
      }
    
      if (error || !products) {
        console.log(products)
        return <Error />;
      }
      
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 pl-6 pb-6">
          {products.slice(paginationPosition.start , paginationPosition.end).map(v=><Card key={v} id={v} />)}
          <ProductPagination products={products} paginationPosition={paginationPosition} setPaginationPosition={setPaginationPosition} slidesPerView={SLIDES_PER_VIEW}/>
        </div>
     );
}

export default ProductGrid;