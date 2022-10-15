import { UserDetails } from './user-details';

export interface ProductSummary {
  batchId: string;
  eventType: string;
  farmerDetails: UserDetails;
  dispatchDate: string;
  supplierDetails: UserDetails;
  eventDateTime: Date;
  fleetDetails: FleetDetails;
}

export interface FleetDetails {
  fleetId: string;
  fromLocation: string;
  toLocation: string;
  vehicleNumber: string;
  driverName: string;
  driverContactNumber: string;
  journeyStartDate: string;
  journeyCompleteDate: any;
}
