import { CardItem } from "@/components/StatusCard"
import { MaintenanceItem } from "@/types/ndex"
import { ReactNode } from "react"


export interface CustomCardContent {
    label?: string
    value: ReactNode
    wrapperCol?: number
    className?: string
  }

  
export interface CardData {
    content?: CustomCardContent[]
    title?:string
    color?:string
  }

export function convertDataToContent<Item extends CardItem>(
    item: Item,
    type:string
  ): CardData | undefined {
    if (type === 'status') {
      const distributionItem = item as MaintenanceItem

      return {
        content: [
          {
            label: 'تاریخ توزیع',
            value:item.date,
          },
          {
            label: 'زمان توزیع',
            value:item.id,
          },
         
        //   {
        //     label: 'تحویل گیرنده',
        //     value: renderEmpty(distributionItem?.drs?.receiverCustomerFullName),
        //   },
         
        ],

      title:"",
      color:""
      }
    }
}