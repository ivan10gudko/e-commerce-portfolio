import { useQuery } from "@tanstack/react-query";
import { getProductCard} from "../services/productsAPI";

export function useProductCard(id) {
  const { isLoading, data:product, error } = useQuery({
    queryKey: ["product_card", { id }],
    queryFn: () => getProductCard(id),
  });

  return { isLoading, error, product };
}
