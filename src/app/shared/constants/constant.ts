export const FIELD_TYPES = {
  text: 'text',
  textArea: 'textArea',
  date: 'date',
  dropDown: 'DropDown',
  radioButton: 'radioButton',
};

export const KEY_VALUE_PROCESS_LIST = {
  eventId: 'Event Id',
  eventType: 'Event Type',
  referenceId: 'Reference Id',
  batchId: 'Batch Id',
  packageID: 'Package ID',
  eventDatetime: 'Event Date Time',
};

export const LOGIN_CREDENTIALS = [
  {
    userName: 'Farmer',
    role: 'FARMER',
    sub: 'Farmer',
  },
  {
    userName: 'Retailer',
    role: 'RETAILER',
    sub: 'Retailer',
  },
  {
    userName: 'Manufacturer',
    role: 'MANUFACTURER',
    sub: 'Manufacturer',
  },
  {
    userName: 'Distributor',
    role: 'DISTRIBUTOR',
    sub: 'Distributor',
  },
  {
    userName: 'Supplier',
    role: 'SUPPLIER',
    sub: 'Supplier',
  },
  {
    userName: 'Admin',
    role: 'ADMIN',
    sub: 'Admin',
  },
  {
    userName: 'Guest',
    role: 'GUEST',
    sub: 'Guest',
  },
];

export const EventTypes = [
  'Collected',
  'Received',
  'QualityCheck',
  'Cleaned',
  'Processed',
  'Dispatched',
  'RetailerReceived',
];
