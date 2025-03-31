import { BounceLoader } from "react-spinners";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router";
import ErrorProduct from "../ui/ErrorProduct";
import { ProductContext } from "../context/productContext";
import Product from "./Product";
import { useEffect, useState } from "react";
import { getVariant } from "../services/productsAPI";
import { useCart } from "../context/CartContext";

function ProductPage() {
  let { productId } = useParams();
  const [attrChange,setAttrChange] = useState(false);
  const { isLoading, data, error } = useProduct(productId);
  const [product, setProduct] = useState(data);
  const [quantity,setQuantity] = useState(1); 
  const {addProduct} = useCart();

  console.log(product);
  
  function setAttribute(selectedValue){
    let newAttributes = {...product.selectedAttributes,...selectedValue};
    setProduct({...product,selectedAttributes:newAttributes});
    setAttrChange(true);
  };
  
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  useEffect(()=>{
    if(attrChange){
      const fetchVariant = async () => {
        console.log('start');
          let variant  = await getVariant(product.productId , product.selectedAttributes);
          // variant.variantId = variant.id;
          // variant.id = variant.productId;
          // delete variant.productId;
          setProduct({...product,...variant});
      }
      fetchVariant();
      setAttrChange(false);
    }
   
  },[attrChange]);

  if (isLoading) {
    return <BounceLoader />;
  }

  if (error || !product) {
    return <ErrorProduct />;
  }

  function addProductToCart(){
    let selectedDisplayAttributes = {}

    for(let attr in product.selectedAttributes){
      let currAttr = product.attributes.find(v=>v.id==attr);
      let currValue = currAttr.values.find(v=> v.value === product.selectedAttributes[attr])?.displayValue;

      selectedDisplayAttributes[currAttr.displayName?? attr ]  =currValue ?? product.selectedAttributes[attr];
      }

    const productToCart = {
      id: product.id,
      productId: product.productId,
      quantity,
      name: product.name,
      image : product.images[0],
      price: product.price,
      selectedAttributes: selectedDisplayAttributes ,
    }
    console.log(product.selectedAttributes)
    addProduct(productToCart)
  }

  return (
    <ProductContext.Provider value={{ ...product,setAttribute,quantity,setQuantity ,addProductToCart}}>
      <Product />
    </ProductContext.Provider>
  );
}

export default ProductPage;
