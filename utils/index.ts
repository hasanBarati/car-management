import { CardItem } from "@/components/Card";
import { IRoute, MaintenanceItem } from "@/types/ndex";
import { ReactNode } from "react";

export interface CustomCardContent {
  label?: string;
  value: ReactNode;
  className?: any;
}

export interface CardData {
  content?: CustomCardContent[];
  title?: string;
  color?: string;
  date?:string
}

export function convertDataToContent<Item extends CardItem>(
  item: Item,
  type: string,
): CardData | undefined {
  if (type === "status") {
    const statusItems = item as MaintenanceItem;

    return {
      content: [
        {
          label: "تاریخ سررسید",
          value: statusItems.date,
        },
        {
          label: "کیلومتر باقی مانده",
          value: statusItems.remaining,
        },
        {
          label: "وضعیت یادآور",
          value: statusItems.status,
        },
      ],

      title: statusItems.title,
      color: statusItems.color,
    };
  }

  if (type === "route") {
    const routeItems = item as IRoute;

    return {
      content: [
        {
          label: "مسافت طی شده",
          value: routeItems.distance,
        },
        {
          label: "مصرف بنزین",
          value: routeItems.fuelConsumption,
          className:{float:"left"}
        },
        {
          label: "مدت زمان",
          value: routeItems.duration,
        },
        {
          label: "میانگین سرعت",
          value: routeItems.avgSpeed,
        },
      ],

      title: routeItems.title ,
      date:routeItems.date
  
    };
  }
}
