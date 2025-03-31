import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/productsAPI";

export function useCategory(name) {
  
  const { isLoading, data:category, error } = useQuery({
    queryKey: ["category", { name }],
    queryFn:()=> getCategory(name),
  });

  return { isLoading, error, category };
}