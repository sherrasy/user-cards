  export interface User {
    id: number; 
    name: string; 
    userName: string; 
    email: string; 
    city: string; 
    phone: string; 
    companyName: string; 
    avatar: string; 
    isArchived:boolean;
    isHidden:boolean;
  }

  export interface UserData {
    id: number; 
    name: string; 
    username: string; 
    email: string; 
    address:{
      city:string;
    }
    phone: string; 
    company:{
      name:string;
    }; 
  }
