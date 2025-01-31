import { deleteNotification } from "@/service/reminders";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteRiminder(){
    const queryClient = useQueryClient();
    const {mutate,isPending}=useMutation({
        mutationFn:async (id:number)=>{
           await deleteNotification(id)
        },
       onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['reminder'] });
       } 
    })

    return {isPending,deleteMutate:mutate}
}