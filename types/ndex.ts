export type MaintenanceItem = {
    id: string;
    title: string;
    date: string;
    status: string;
    remaining: string;
    color: string;
  };
  export type CarRepairHistory= {
    id:number,
    title: string;         
    date: string;       
    reason: string;      
    cost: number;         
    description: string;    
  }