import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EventTypes } from './../../../../shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  receivedFormGroup!: FormGroup;
  eventTypes = EventTypes;

  
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(private fb: FormBuilder, private foodChainService: FoodChainService) {}

  ngOnInit(): void {
    this.receivedFormGroup = this.fb.group({
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
    this.checkFormGroup.emit({ step: 0, form: this.receivedFormGroup });
    this.foodChainService.productDetailsData.subscribe((productDetails: any)=>{
      this.receivedFormGroup.patchValue(productDetails);
      this.receivedFormGroup.updateValueAndValidity();
    })
  }

  onNext(): void {
    this.moveStep.emit('forward');
  }
}
