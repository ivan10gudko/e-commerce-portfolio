function Subtotal({products}) {
    const subtotal = products.reduce((prev,curr)=>prev+=curr.quantity*curr.price,0);

    return (<div className="w-full bg-productGray border-t-[1px] border-black/10 flex justify-between py-3 px-6">
        <h4 className="text-lg font-urbanist">Subtotal:</h4>
        <span className="font-bold font-urbanist">${subtotal}</span>
    </div>  );
}

export default Subtotal;