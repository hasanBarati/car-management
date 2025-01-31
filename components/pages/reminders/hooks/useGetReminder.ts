import { getNotifications } from "@/service/reminders";
import { useQuery } from "@tanstack/react-query";

export default function useGetRiminder(){
      const {data,isLoading}=useQuery({
        queryKey:['reminder'],
        queryFn:getNotifications,
      })
      return {data,isLoading}
}