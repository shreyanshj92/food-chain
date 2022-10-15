import { Component, OnInit } from '@angular/core';

import { FoodChainService } from './../../../shared/services/food-chain.service';
import { FormField } from 'src/app/shared/interfaces/form-field';
import { MaterialCollectionForm } from 'src/app/shared/interfaces/material-collection-form';

@Component({
  selector: 'app-material-collection',
  templateUrl: './material-collection.component.html',
  styleUrls: ['./material-collection.component.scss']
})
export class MaterialCollectionComponent implements OnInit {

  materialFormFields: MaterialCollectionForm = {
    formerId: 0,
    materialName: '',
    quantity: 0,
    packageDate: new Date(),
    dispatchDate: new Date(),
    fleetId: '',
    supplierId: 0,
    vehicleNumber: '',
    fromLocation: '',
    toLocation: '',
    journeyStartDate: new Date(),
    driverName: '',
    driverContactNumber: '',
    note: ''
  }

  formDynamicJSON: FormField[] = [];

  constructor(private fcs: FoodChainService) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    for (const [key, value] of Object.entries(this.materialFormFields)) {
      console.log(`key-${key}| value-${value} |typeofVAl ${typeof value}`);
      const field: FormField = {
        fieldLabel: key,
        placeHolder: '',
        userAnswer: '',
        fieldType: '',
        required: false,
        options: []
      }
      switch (typeof value) {
        case 'string':
          field.fieldType = 'text'
          break;

        case 'number':
          field.fieldType = 'number';
          break;

        case 'object':
          field.fieldType = 'date';
          break;
          
        default:
          break;
      }
      this.formDynamicJSON.push(field);
    }
  }

  testSave() {
    const obj: MaterialCollectionForm = {
      "formerId": 3,
      "materialName": "Mango",
      "quantity": 100,
      "packageDate": new Date("2022-10-14"),
      "dispatchDate": new Date("2022-10-14"),
      "fleetId": "UA001",
      "supplierId": 5,
      "vehicleNumber": "KA-05-AQ-1776",
      "fromLocation": "Davanagere",
      "toLocation": "Bengaluru",
      "journeyStartDate": new Date("2022-10-14"),
      "driverName": "Krishna",
      "driverContactNumber": "7890123456",
      "note": "xyz xyz"
    }
    console.log(this.fcs.saveMaterialFormDetails(obj));
    
  }

}
