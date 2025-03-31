function ProductDetailsList({ list }) {
  return (
    <div className="lg:w-2/6 text-sm font-semibold text-black/70 divide-y divide-black/30 border-y-2 border-black h-min">
      {Object.keys(list).map((v) => (
        <ListElement key={v} name={v} value={list[v]}/>
      ))}
    </div>
  );
}

function ListElement({name,value}){
    return(<dl className="flex py-5 w-full px-4 ">
    <dt className="w-2/5">{name}</dt>
    <dd className="text-wrap w-3/5">{value}</dd>
    </dl>)
}

export default ProductDetailsList;
