import { deleteNotification } from "@/service/reminders";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteRiminder(){
    const queryClient = useQueryClient();
    const {mutate,isPending}=useMutation({
        mutationFn:async (id)=>{
           await deleteNotification(id)
        },
       onSuccess:()=>{
            queryClient.invalidateQueries(['reminder']);
       } 
    })

    return {isPending,deleteMutate:mutate}
}