function FilterBar() {
    return ( <div className="flex">
        Filter: 
        <form>
            <select name="sorted" id="sorted">
                <option value="price-increase">Price increase</option>
                <option value="price-decrease">Price decrease</option>
                <option value="popularity">Popularity</option>
                <option value="newness">Newness</option>
            </select>
        </form>
    </div> );
}

export default FilterBar;