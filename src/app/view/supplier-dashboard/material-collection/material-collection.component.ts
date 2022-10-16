import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { FoodChainService } from './../../../shared/services/food-chain.service';
import { FormField } from 'src/app/shared/interfaces/form-field';
import { GeneratedFormOutput } from './../../../shared/interfaces/form-field';
import { MaterialCollectionForm } from 'src/app/shared/interfaces/material-collection-form';
import { UserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-material-collection',
  templateUrl: './material-collection.component.html',
  styleUrls: ['./material-collection.component.scss']
})
export class MaterialCollectionComponent implements OnInit {
  @Input() farmerDetails!:UserDetails;
  supplierDetails: any;

  materialFormFields!: MaterialCollectionForm; 

  formDynamicJSON: FormField[] = [];

  constructor(private fcs: FoodChainService, private authService: AuthenticationService) { }

  

  ngOnInit(): void {
    this.authService.user.subscribe((loggedInUser:any) => {
      console.log('suppler loggediin');
      console.log(loggedInUser);
      if(loggedInUser.role == 'SUPPLIER') {
        console.log(loggedInUser.id)
        this.supplierDetails = loggedInUser;
        console.log(this.supplierDetails)
      }
      this.materialFormFields = {
        formerId: this.farmerDetails?.userId | 0,
        materialName: '',
        quantity: 0,
        packageDate: "2022-02-12",
        dispatchDate: "2022-02-12",
        fleetId: '',
        supplierId: this.supplierDetails?.id | 0,
        vehicleNumber: '',
        fromLocation: '',
        toLocation: '',
        journeyStartDate: "2022-02-12",
        driverName: '',
        driverContactNumber: '',
        note: ''
      }
      this.generateForm();
    });
    
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
          field.userAnswer = value.toString();
          field.disabled=true;
          break;
        case 'supplierId':
          field.userAnswer = value.toString();
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
      this.fcs.saveMaterialFormDetails(formOpEvent.formValue).subscribe(
        data => {
          console.log('data')
          console.log(data)
          alert('data');
        },
        err => {
          console.log('error')
          alert(err);
        }
      //   {
      //   next: (data) => {
      //     alert('Form saved');
      //     console.log(data);
      //   },
      //   error: (err) => {
      //     alert('ERROR Form not saved');
      //     console.log(err);
      //   }
      // }
      )
    }
  }

}
