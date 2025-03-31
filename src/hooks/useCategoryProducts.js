import { useQuery } from "@tanstack/react-query";
import { getProductsForCategory } from "../services/productsAPI";

export function useCategoryProducts(selectedAttributes) {
  const { isLoading, data:products, error } = useQuery({
    queryKey: ["category_products", { selectedAttributes}],
    queryFn: () => getProductsForCategory(selectedAttributes),
  });

  return { isLoading, error, products };
}
