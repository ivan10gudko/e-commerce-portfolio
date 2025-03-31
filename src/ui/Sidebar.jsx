import { useQuery } from "@tanstack/react-query";
import { getCategoriesList, getSubcategories } from "../services/productsAPI";
import ErrorProduct from "./ErrorProduct";
import { BounceLoader } from "react-spinners";
import { capitalizeFirstLetters } from "../utils/String";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Sidebar({ categoryId,selectedCategories,setSelectedCategories }) {
  const {
    isLoading,
    data: subcategoriesList,
    error,
  } = useQuery({
    queryKey: ["subcategories_list", { categoryId }],
    queryFn: () => getSubcategories(categoryId),
  });

  if (isLoading) {
    return <BounceLoader />;
  }

  if (error || !subcategoriesList) {
    return <ErrorProduct />;
  }

  function handleChange(e){
    let newId = +e.target.value
    if(selectedCategories.includes(newId)){
        setSelectedCategories(prev=>prev.filter(v=>v!==newId));
        if(selectedCategories.length === 1) setSelectedCategories([categoryId]);      
    }else{
      console.log(newId)
      setSelectedCategories(prev=>[...prev,newId].filter(v=>v!==categoryId));
    }
  }
  return (
    <aside className="w-1/5 p-4 border-r text-lg font-urbanist">
      Categories:
      <form className="flex flex-col accent-black ">
      {subcategoriesList.map((v) => (
         v.id>=100 ?<Category key={v.id} id={v.id} selected={selectedCategories.includes(v.id)} name={v.name} onInput={handleChange}/> : <CategoryWithSubcategory key={v.id} id={v.id} selected={selectedCategories.includes(v.id)} name={v.name} onInput={handleChange}/>
      ))}
      </form>
    </aside>
  );
}

function SidebarCategory({ id, name, selected }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-1">
      <input type="checkbox" checked={selected} value={id} id={id} />
      <label className="mx-3 font-medium  justify-between" htmlFor={id}>
        {capitalizeFirstLetters(name)}
        <KeyboardArrowDownIcon
          className={`ml-4 transition-transform duration-500 ease-out delay-75 ${
            isOpen ? "rotate-180 " : "rotate-0"
          }`} onClick={()=>setIsOpen(v=>!v)}
        />
      </label>
      {isOpen ? <SubcategoryList id={id} selected={selected} /> : null}
    </div>
  );
}

function SubcategoryList({ id, selected }) {
  const {
    isLoading,
    data: subcategoriesList,
    error,
  } = useQuery({
    queryKey: ["subcategories_list", { id }],
    queryFn: () => getSubcategories(id),
  });

  if (isLoading) {
    return <BounceLoader />;
  }

  if (error || !subcategoriesList) {
    return <ErrorProduct />;
  }
  return (
    <form className="ml-6 ">
      {subcategoriesList.map((v) => (
         <Category key={v.id} id={v.id} selected={selected} name={v.name}/>
      ))}
    </form>
  );
}

function Category({id,selected,name,handleChange}){
  return (
    <div key={id} className="text-md my-1/2">
    <input type="checkbox" checked={selected} value={v.id} id={v.id} onInput={handleChange} className="check"/>
    <label className={`mx-3 ${selected?"underline":"no-underlineunderline"}`} htmlFor={id} >
      {capitalizeFirstLetters(name)}
    </label>
  </div>
  )
}

function CategoryWithSubcategory({id,selected,name}){
  return (
    <div>
      <div  className="text-md my-1/2">
          <input type="checkbox" checked={selected} value={id} id={id} />
          <label className="mx-3 " htmlFor={id}>
            {capitalizeFirstLetters(name)}
          </label>
        </div>
        <SubcategoryList id={id} selected={selected}/>
      </div>
  )
}

export default Sidebar;
