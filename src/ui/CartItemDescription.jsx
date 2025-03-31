
import CartItemConfigurationList from "./CartItemConfigurationList";
import CartItemPrice from "./CartItemPrice";
import CartItemQuantity from "./CartItemQuantity";
import RemoveButton from "./RemoveButton";

function CartItemDescription({product}) {
    console.log(product);
    const {id,name,price,quantity,selectedAttributes}  = product;
    return ( 
    <>
       <div >
        <span className="text-lg font-semibold font-urbanist">{name}</span>
        <CartItemConfigurationList selectedAttributes={selectedAttributes}/>
        <CartItemQuantity quantity={quantity} id={id} />
      </div>
      <div className="relative *:absolute *:right-0">
        <CartItemPrice price={price} quantity={quantity} />
        <RemoveButton id={id}/>
      </div>
      
    </> );
}

export default CartItemDescription;