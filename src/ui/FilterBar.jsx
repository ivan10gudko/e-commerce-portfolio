import Button from "./Button";

function FilterBar({setSidebarOpen}) {
    return ( <div className="flex py-2 justify-end items-center px-2 gap-4 ">
        <Button action={()=>setSidebarOpen(v=>!v)} type="fill" className="md:hidden text-base" bgColor="black" color="white" > Filters</Button>
        <form>
            <select name="sorted" id="sorted" className="border py-2 px-3 bg-productGray font-urbanist font-medium rounded focus:outline-black/70">
                <option value="price-increase">Price increase</option>
                <option value="price-decrease">Price decrease</option>
                <option value="popularity">Popularity</option>
                <option value="newness">Newness</option>
            </select>
        </form>
    </div> );
}

export default FilterBar;