import { useQuery } from "@tanstack/react-query"
import { getRouteData } from ".."


export default function useGetRoutes(){
   const {data,isLoading}=useQuery({queryKey:["routes"],queryFn:getRouteData})
   return {data,isLoading}
}

