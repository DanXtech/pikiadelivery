export interface StatusType {
    text: string;
    color: string;
  }
  
  export interface TicketListType {
    id: string;
    title: string;
    date: string;
    message: string,
    status: StatusType; 
  }


  export interface EarningItem {
    id: string; 
    pickup: string,
    destination: string,
    location: string; 
    date: string; 
    amount: string; 
    status: string; 
  }


  export interface Transaction {
    id: string;
    amount: string;
    details?: string;
    source: string;
    type: 'Payment' | 'Withdrawal';
    recipient: string;
    timestamp: string;
    isCredit: boolean;
  }
  

export interface Request {
  id: number;
  pickupLocation: string;
  dropoffLocation: string;
  distance: string;
  progress: number; 
}

export interface CountryCode {
  code: string;
  country: string;
  iso: string;
}