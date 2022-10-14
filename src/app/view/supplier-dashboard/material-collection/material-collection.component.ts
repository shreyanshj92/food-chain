import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}
