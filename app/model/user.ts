 
export interface User {
    id: number;
    username:string;
    password:string;
    email: string;
    name: Name;
    status?: string;
    phoneNumbers: string[];
}
export interface Name {
    first: string;
    last?: string;
}
 
export interface UserCreationRequest {
    email: string;
    name: Name;
    phoneNumbers: string[];
}