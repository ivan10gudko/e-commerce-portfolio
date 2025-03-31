import { useQuery } from "@tanstack/react-query";
import { getDiscount } from "../services/productsAPI";


export function useDiscount(id){
    const {
        isLoading, data: discount,error
    } = useQuery({
        queryKey:["discount",{id}],
        queryFn:() => getDiscount(id),
    })
    return {isLoading,error,discount};
}