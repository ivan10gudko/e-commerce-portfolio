import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

function valide(product) {
  if (
    typeof product !== "object" ||
    Array.isArray(product) ||
    product === null
  ) {
    console.log("not object")
    return false;
  }

  if (
    !product.id ||
    !product.productId ||
    !product.quantity ||
    !product.name ||
    !product.image ||
    !product.price ||
    !product.selectedAttributes
  ) {

    console.log("no item")
    return false;
  }

  if (
    typeof product.image !== "string" ||
    typeof product.id !== "string" ||
    typeof product.quantity !== "number" ||
    typeof product.productId !== "number"||
    typeof product.selectedAttributes !== "object"
    ) {
    console.log("invalid type")
    return false;
  }

  if (product.quantity <= 0) return false;

  return true;
}
function reducer(state, action) {
  switch (action.type) {
    case "add_product":
      return {
        products: [...state.products, action.product],
      };
    case "remove_product":
      return {
        products: state.products.filter((v) => v.id != action.id),
      };
    case "empty_cart":
      return {
        products: [],
      };
    case "set_quantity":
      return {
        ...state,
        products: state.products.map(item=>{
          if(item.id===action.id){
            item.quantity = action.quantity
          }
          return item; 
        })
      };
      case "add_quantity":
        return {
          ...state,
          products: state.products.map(item=>{
            if(item.id===action.id){
              item.quantity += action.quantity
            }
            return item; 
          })
        };
    default:
      throw new Error("Action unknown");
  }
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, { products: getInitialEvents() });

  function getInitialEvents(){
    let items = JSON.parse(localStorage.getItem('cart'));
    return items||[];
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.products));

  }, [cart]);

  function addProduct(product) {
    if (!valide(product)) {
      throw new Error("invalid product");
    }

    if(cart.products.some(v=>v.id===product.id)){
      dispatch({type:"add_quantity" , id: product.id , quantity: product.quantity})
    }else{
      dispatch({ type: "add_product", product });
    }  
  }

  function removeProduct(id) {
    dispatch({ type: "remove_product", id });
  }
  function setCartQuantity(id,quantity) {
    dispatch({ type: "set_quantity", id,quantity });
  }
  function addCartQuantity(id,quantity) {
    dispatch({ type: "add_quantity", id,quantity });
  }

  function emptyCart() {
    dispatch({ type: "empty_cart" });
  }

  return (
    <CartContext.Provider
      value={{
        products: cart?.products || [],
        addProduct,
        removeProduct,
        setCartQuantity,
        addCartQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("CartContext was used outside of the CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
