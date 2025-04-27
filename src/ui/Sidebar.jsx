import { useQuery } from "@tanstack/react-query";
import { getCategoriesList, getSubcategories } from "../services/productsAPI";
import ErrorProduct from "./ErrorProduct";
import { BounceLoader } from "react-spinners";
import { capitalizeFirstLetters } from "../utils/String";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import Button from "./Button";

function Sidebar({ categoryId,selectedCategories,setSelectedCategories,setSidebarOpen ,SidebarOpen}) {
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
  const isSelected = (id)=>selectedCategories.includes(id);
  return (
    <aside className="w-full border absolute z-50 md:static md:w-1/5 p-4 md:border-r text-lg font-urbanist bg-productGray">
      <div className="flex justify-between">
        <span className="text-xl font-semibold ">Categories:</span>
        <span onClick={()=>setSidebarOpen(false)} className="md:hidden" ><CloseIcon/></span>
      </div>
      <form className="flex flex-col accent-black divide-y">
      {subcategoriesList.map((v) => (
         v.id>=100 ?<Category key={v.id} id={v.id} selected={isSelected(v.id)} name={v.name} handleChange={handleChange}/> : <CategoryWithSubcategory key={v.id} id={v.id} name={v.name} handleChange={handleChange} selected={isSelected}/>
      ))}

      <Button action={()=>setSidebarOpen(v=>!v)} type="fill" className="md:hidden mt-3" bgColor="black" color="white" >Apply</Button>
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

function SubcategoryList({ id, selected ,handleChange,isOpen}) {
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
    <form className={`ml-6 transition-all duration-150  divide-y ${isOpen ? "h-auto":"hidden"}`}>
      {subcategoriesList.map((v) => (
         <Category key={v.id} id={v.id} selected={selected(v.id)} name={v.name} handleChange={handleChange}/>
      ))}
    </form>
  );
}

function Category({id,selected,name,handleChange}){
  return (
    <div key={id} className="text-md my-1/2 hover:scale-95 duration-75">
    <input type="checkbox" checked={selected} value={id} id={id} onInput={handleChange} className="check"/>
    <label className={`mx-3 ${selected?"underline":"no-underlineunderline"}`} htmlFor={id}>
      {capitalizeFirstLetters(name)}
    </label>
  </div>
  )
}

function CategoryWithSubcategory({id,selected,name,handleChange}){
const [isOpen,setIsOpen] = useState(false);

  return (
    <div>
      <div  className="text-md my-1/2 hover:border-b hover:border-black/80 duration-75 hover:scale-95" onClick={()=>setIsOpen(i=>!i)}>
          <input type="checkbox" checked={selected(id)} value={id} id={id} onInput={handleChange} />
          <label className="mx-3">
            {capitalizeFirstLetters(name)}
            <ArrowDropUpIcon className={`transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`}/>
          </label>
        </div>
        <SubcategoryList id={id} selected={selected} isOpen={isOpen} handleChange={handleChange}/>
      </div>
  )
}

export default Sidebar;
