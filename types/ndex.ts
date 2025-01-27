export type MaintenanceItem = {
    id: string;
    status: string;
    color: string;
    title: string;
    date: string;
    type: string;
    mileage: number;
    notification?: boolean;
  };
  export type CarRepairHistory= {
    id?:number,
    title: string;         
    date?: string;       
    reason?: string;      
    cost: number;         
    description: string;    
    brand?:string
  }

 export  type IRoute = {
    id:number
    title: string;  
    date: string; 
    distance: string;
    duration: string; 
    fuelConsumption: string;
    avgSpeed: string; 
  };
  