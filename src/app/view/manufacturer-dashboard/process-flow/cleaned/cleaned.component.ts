import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EventTypes } from 'src/app/shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';

@Component({
  selector: 'app-cleaned',
  templateUrl: './cleaned.component.html',
  styleUrls: ['./cleaned.component.scss'],
})
export class CleanedComponent implements OnInit {
  cleanedFormGroup!: FormGroup;
  eventTypes = EventTypes;

  @Input() productDetail!:any
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(private fb: FormBuilder, private foodChainService: FoodChainService) {}

  ngOnInit(): void {
    this.cleanedFormGroup = this.fb.group({
      batchId: [''],
      eventType: [''],
      formerDetails: this.fb.group({
        username: [''],
        phone: [''],
        email: [''],
        address: [''],
      }),
      dispatchDate: [''],
      supplierDetails: this.fb.group({
        username: [''],
        phone: [''],
        email: [''],
        address: [''],
      }),
      eventDateTime: [''],
      fleetDetails: this.fb.group({
        fleetId: [''],
        fromLocation: [''],
        toLocation: [''],
        driverName: [''],
        driverContactNumber: [''],
        journeyStartDate: [''],
      }),
    });
    this.checkFormGroup.emit({step:2,form:this.cleanedFormGroup});
    this.foodChainService.productDetailsData.subscribe((productDetails: any)=>{
      this.cleanedFormGroup.patchValue(productDetails);
      this.cleanedFormGroup.updateValueAndValidity();
    })
  }

  onNext(): void {
    this.moveStep.emit("forward")
  }
  onPrevious(): void{
    this.moveStep.emit("back")
  }
}
