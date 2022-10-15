export const FIELD_TYPES = {
  text: 'text',
  textArea: 'textArea',
  date: 'date',
  dropDown: 'DropDown',
  radioButton: 'radioButton',
};

export const KEY_VALUE = {
  id: 'Id',
  name: 'Name',
  progress: 'Progress',
  fruit: 'Fruit',
};

export const FARMER_KEY_VALUE = {
    username : "User Name",
    firstname : "First Name",
    lastname : "Last Name",
    phone : "Phone",
    email : "Email",
    fullAddress: "Address"
}

export const LOGIN_CREDENTIALS = [
  {
    userName: 'Farmer',
    role: 'FARMER',
    id: 3,
    sub: 'Farmer',
  },
  {
    userName: 'Retailer',
    role: 'RETAILER',
    id: 8,
    sub: 'Retailer',
  },
  {
    userName: 'Manufacturer',
    role: 'MANUFACTURER',
    id: 12,
    sub: 'Manufacturer',
  },
  {
    userName: 'Distributor',
    role: 'DISTRIBUTOR',
    id: 14,
    sub: 'Distributor',
  },
  {
    userName: 'Supplier',
    role: 'SUPPLIER',
    id: 5,
    sub: 'Supplier',
  },
  {
    userName: 'Admin',
    role: 'ADMIN',
    id: 10,
    sub: 'Admin',
  },
  {
    userName: 'Guest',
    role: 'GUEST',
    id: 0,
    sub: 'Guest',
  },
];

export const EventTypes =["Collected", "Received", "QualityCheck", "Cleaned", "Processed", "Dispatched", "RetailerReceived"]
