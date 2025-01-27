import { deleteNotifications } from "@/service/reminders";
import { useMutation } from "@tanstack/react-query";

export function useDeleteRiminder(){
    const {isLoading}=useMutation({
        mutationFn:async (id)=>{
           await deleteNotifications(id)
        }
    })
}