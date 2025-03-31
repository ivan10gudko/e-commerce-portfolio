function CartItemPrice({price,quantity}) {
    let calculatedPrice = price * quantity;
    return ( 
        <span className="font-bold font-urbanist">${calculatedPrice}</span>
     );
}

export default CartItemPrice;