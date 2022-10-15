export interface UserDetails {
    userId: number
    username: string
    firstName: string
    lastName: string
    password: string
    role: string
    phone: string
    email: string
    address: Address
  }
  
  export interface Address {
    id: number
    street: string
    city: string
    district: string
  }