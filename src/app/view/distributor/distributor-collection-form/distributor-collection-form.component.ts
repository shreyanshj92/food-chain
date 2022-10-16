import { Component, Input, OnInit } from '@angular/core';
import { FormField, GeneratedFormOutput } from 'src/app/shared/interfaces/form-field';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DistributerCollectionForm } from 'src/app/shared/interfaces/distributer-collection-form';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { MaterialCollectionForm } from 'src/app/shared/interfaces/material-collection-form';
import { UserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-distributor-collection-form',
  templateUrl: './distributor-collection-form.component.html',
  styleUrls: ['./distributor-collection-form.component.scss']
})
export class DistributorCollectionFormComponent implements OnInit {
  @Input() retailerDetails!:UserDetails;
  distributerDetails: any;
  showQrScanner: boolean = true;

  distributorCollectionForm!: DistributerCollectionForm; 

  formDynamicJSON: FormField[] = [];

  constructor(private fcs: FoodChainService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((loggedInUser:any) => {
      if(loggedInUser.role == 'DISTRIBUTOR') {
        this.distributerDetails = loggedInUser;
      }
      this.distributorCollectionForm = {
        batchId: '',
        orderNumber: '',
        dispatchDate: new Date(),
        distributorId: this.distributerDetails.id,
        retailerId: this.retailerDetails.userId.toString(),
        fleetId: '',
        vehicleNumber: '',
        fromLocation: '',
        toLocation: '',
        journeyStartDate: new Date(),
        driverName: '',
        driverContactNumber: '',
        note: ''
      }
      this.generateForm();
    });
    
  }

  generateForm() {
    for (const [key, value] of Object.entries(this.distributorCollectionForm)) {
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
        case 'distributorId':
          field.userAnswer = value.toString();
          field.disabled=true;
          break;
        case 'retailerId':
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
      this.fcs.saveDistributerCollectionFormDetails(formOpEvent.formValue).subscribe({
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

  onCaptureBatchId(qrBatchId: string) {
    alert(qrBatchId);
    if(this.retailerDetails) {
      this.distributorCollectionForm.batchId = qrBatchId;
      this.showQrScanner = false;
    }
  }
}
