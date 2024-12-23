export type MaintenanceItem = {
    id: string;
    title: string;
    date: string;
    status: string;
    remaining: string;
    color: string;
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
  