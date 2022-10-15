import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FoodChainService } from 'src/app/shared/services/food-chain.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent implements OnInit {

  isEditable: boolean = false;

  isSummeryAvailable: boolean = false;
  summeryForm!: FormGroup;

  constructor(private foodChainService: FoodChainService, private fb: FormBuilder) {
    this.summeryForm = this.fb.group({
      batchId: [""],
      eventType:[""],
      formerDetails: this.fb.group({
        username: [""],
        phone:[""],
        email:[""],
        address:[""]
      }),
      dispatchDate:[""],
      supplierDetails: this.fb.group({
        username: [""],
        phone:[""],
        email:[""],
        address:[""]
    }),
    eventDateTime:[""],
    fleetDetails:this.fb.group({
      fleetId: [""],
      fromLocation:[""],
      toLocation:[""],
      driverName:[""],
      driverContactNumber:[""],
      journeyStartDate:[""]
  }),

    })
  }

  ngOnInit(): void {}

  onEdit(): void {
    this.isEditable = true;
  }

  onCaptureProductDetails(event: any): void {
    this.foodChainService
    .getProductDetails(event)
    .subscribe((response: any) => {
      if(response){
        this.isSummeryAvailable=true;
        this.summeryForm.patchValue(response);
      }
      console.log('summery:', response);
      
    }, error=>{
      console.log(error);
    });
  }
}
