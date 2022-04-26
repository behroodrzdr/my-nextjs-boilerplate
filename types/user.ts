export type TUser = {
    firstName: string;
    lastName: string;
    name: string;
    mobile: string;
    email?: string;
    isActive?: number;
  };
  
  export type TAuth = {
    accessToken: string;
    user: TUser;
  };
  