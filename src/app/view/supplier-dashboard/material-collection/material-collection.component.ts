import { Component, OnInit } from '@angular/core';

import { FoodChainService } from './../../../shared/services/food-chain.service';
import { FormField } from 'src/app/shared/interfaces/form-field';
import { GeneratedFormOutput } from './../../../shared/interfaces/form-field';
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
      const field: FormField = {
        fieldLabel: key,
        placeHolder: '',
        userAnswer: '',
        fieldType: '',
        required: false,
        options: [],
        disabled: false
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
      switch(key) {
        case 'formerId':
          field.disabled=true;
          break;
        default:
          break;
      }
      this.formDynamicJSON.push(field);
    }
  }

  onSave(formOpEvent : GeneratedFormOutput) {
    if(formOpEvent.formValue) {
      this.fcs.saveMaterialFormDetails(formOpEvent.formValue).subscribe({
        next: (data) => {
          alert('Form saved');
          console.log(data);
        },
        error: (err) => {
          alert('ERROR Form not saved');
          console.log(err);
        }
      })
    }
  }

}
