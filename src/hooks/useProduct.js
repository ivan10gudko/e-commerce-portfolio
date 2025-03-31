import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/productsAPI";

export function useProduct(id){
    const {
        isLoading, data,error
    } = useQuery({
        queryKey:["product",{id}],
        queryFn:() => getProduct(id),
    })
   
    return {isLoading,error,data};
}
