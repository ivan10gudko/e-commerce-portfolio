import { useParams, useSearchParams } from "react-router";
import { BounceLoader } from "react-spinners";
import {useCategory} from "../hooks/useCategory";
import ErrorProduct from "../ui/ErrorProduct";
import { capitalizeFirstLetters } from "../utils/String";
import Sidebar from "../ui/Sidebar";
import FilterBar from "../ui/FilterBar";
import ProductGrid from "../ui/ProductGrid";
import { useEffect, useState } from "react";

function Shop() {
    const params = useParams();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { isLoading, category, error } = useCategory(params.categoryName);

    useEffect(()=>{
        if(!isLoading) setSelectedCategories([category.id])
    } ,[category,isLoading])

    if (isLoading) {
        return <BounceLoader />;
      }
    
      if (error || !category) {
        return <ErrorProduct />;
      }

      const {name,id,image} = category;
      

    return ( <>
    <section className="relative md:flex md:items-center md:justify-between w-full max-md:px-10 lg:px-14 my-6 bg-productGray" >
    <div className="flex justify-center items-center w-1/2 absolute md:relative max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 ">
         <h1 className="text-3xl lg:text-5xl font-semibold font-gelasio bg-productGray py-3 px-5">{capitalizeFirstLetters(name)}</h1>
    </div>
    <img src={image} className="md:h-[50vh] w-full h-auto md:w-auto"/>
    </section>
    <div className="flex mx-10 lg:mx-14 mt-10 border-y bg-productGray">
      <Sidebar selectedCategories={selectedCategories} categoryId={id} setSelectedCategories={setSelectedCategories}/>
      <div className="w-4/5">
        <FilterBar />
        <ProductGrid selectedCategories={selectedCategories}/>
      </div>
    </div>
      
    
    </> );
}

export default Shop;