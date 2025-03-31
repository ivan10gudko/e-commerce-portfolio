import supabase from "./supabase";

export async function getProduct(id) {
  let { data, error } = await supabase.from("product").select("*").eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }

  data = await data[0];
  data.productId = data.id;
  data.id = await getVariantId(data.productId, data.selectedAttributes);
  data.images = JSON.parse(data.images);
  data.attributes = JSON.parse(data.attributes);
  data.selectedAttributes = JSON.parse(data.selectedAttributes);
  data.details = JSON.parse(data.details);
  console.log(data);
  return data;
}

export async function getProductCard(id) {
  let { data, error } = await supabase
    .from("product")
    .select("id,name,price,images,discount,selectedAttributes,price")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }

  data = await data[0];
  
  let result = {
    productId: data.id,
    id: await getVariantId(data.id, data.selectedAttributes),
    image: JSON.parse(data.images).slice(0, 2),
    price: data.price,
    name: data.name,
    discount: data.discount,
  };

  console.log(result);
  return result;
}
export async function getDiscount(id) {
  if (id === null) {
    return null;
  }

  let { data, error } = await supabase
    .from("discount")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }
  return data[0];
}

export async function getVariantId(productId, selectedAttributes) {
  let { data, error } = await supabase
    .from("product_variants")
    .select("id")
    .eq("productId", productId)
    .eq("selectedAttributes", selectedAttributes);

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }

  return data[0].id;
}
export async function getVariant(productId, selectedAttributes) {
  let { data, error } = await supabase
    .from("product_variants")
    .select("*")
    .eq("productId", productId)
    .eq("selectedAttributes", JSON.stringify(selectedAttributes));

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }
  data = await data[0];

  console.log(data);
  return data;
}
export async function getCategoriesList() {
  let { data, error } = await supabase
    .from("categories")
    .select("id,name")

  if (error ||  !data) {
    console.log(error);
    throw new Error("Category doesn`t exist");
  }

  return data;
  
}
export async function getCategory(name) {
  let { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("name", name);

  if (error ||  !data[0]) {
    console.log(error);
    throw new Error("Category doesn`t exist");
  }

  return data[0];
  
}
export async function getSubcategories(categoryId) {
  if(categoryId === 0){
    let { data, error } = await supabase
    .from("categories")
    .select("*")

    if (error) {
      console.log(error);
      throw new Error("product cant be uploated");
    }
  
    console.log(data);
    return data;
  }else{

    let { data, error } = await supabase
    .from("subcategory")
    .select("*")
    .eq("categoryId", categoryId);

    if (error) {
      console.log(error);
      throw new Error("product cant be uploated");
    }
  
    console.log(data);
    return data;

  }
  
 
}

export async function getSubcategory(id) {
  let { data, error } = await supabase
    .from("subcategory")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }

  console.log(data);
  return data[0];
}

export async function getProductsForCategory(selectedCategories) {
  let subcategories = [];

  if(selectedCategories.length===1 && selectedCategories[0]===0 ){
    selectedCategories = [1,2,3,4,5,6,7];
  }
  
  for(let category of selectedCategories){
    if(category >= 100){
      subcategories.push(category);
      continue;
    }

    let sub = await getSubcategories(category);
    sub = sub.map(i=>i.id)
    
    subcategories = subcategories.concat(sub);
  }
  console.log(subcategories);

  let { data, error } = await supabase
    .from("product_category_pairs")
    .select("productId")
    .in("categoryId", subcategories);

  if (error) {
    console.log(error);
    throw new Error("product cant be uploated");
  }

  console.log(data);
  return [...new Set(data)];
}

// export async function getProductsForCategory(id) {
//   try {
//     let categories = await getSubcategories(id);

//     let result = [];

//     for (let category of categories) {
//       let products = await getProductsForSubCategory(category.id);
//       result = result.concat(products);
//     }

//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// }
