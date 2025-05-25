
function CheckoutItemCard({product}) {
    return ( <div className="py-3 px-4 w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
         <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 border rounded relative">
            <CheckoutItemCardImage img={product.image} name={product.name}/>
            <Quantity quantity={product.quantity}/>
        </div>
        <div className="w-max text-right">{product.name}</div>
        </div>
        <CheckoutItemPrice price={product.price} quantity={product.quantity}/>
    </div> );
}
function CheckoutItemCardImage({img , name}){
    return (
       <figure
        className="h-full p-2 flex justify-center"
      >
        <img
          src={img}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </figure>
    )
}

function Quantity({quantity}){
    return (
      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-black/60 text-white/60 flex items-center justify-center text-xs font-semibold rounded-full w-5 h-5">
        {quantity}
      </div>
    )
}
function CheckoutItemPrice({price,quantity}) {
    let calculatedPrice = price * quantity;
    return ( 
        <span className="font-urbanist">${calculatedPrice}</span>
     );
}

export default CheckoutItemCard;