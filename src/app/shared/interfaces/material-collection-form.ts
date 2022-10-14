export interface MaterialCollectionForm {
    formerId: number;
    materialName: string;
    quantity: number;
    packageDate: Date;
    dispatchDate: Date;
    fleetId: string;
    supplierId: number;
    vehicleNumber: string;
    fromLocation: string;
    toLocation: string;
    journeyStartDate: Date;
    driverName: string;
    driverContactNumber: string;
    note: string;
}
