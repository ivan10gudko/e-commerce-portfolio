
function ProductDetailsSummary({details}) {
    return ( <div className="lg:w-2/6">
        <p>{details?.summary}</p>
        {details.list?
        <ul className="m-4 list-disc">
            {details.list.map(v=><li key={v} className="py-2">{v}</li>)}
        </ul>
        :null}
    </div> );
}

export default ProductDetailsSummary;