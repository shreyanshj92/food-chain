import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EventTypes } from 'src/app/shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';

@Component({
  selector: 'app-quality-check',
  templateUrl: './quality-check.component.html',
  styleUrls: ['./quality-check.component.scss'],
})
export class QualityCheckComponent implements OnInit {
  qualityCheckFormGroup!: FormGroup;
  eventTypes = EventTypes;

  @Input() productDetail!: any;
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(private fb: FormBuilder, private foodChainService: FoodChainService) {}

  ngOnInit(): void {
    this.qualityCheckFormGroup = this.fb.group({
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
    this.checkFormGroup.emit({ step: 1, form: this.qualityCheckFormGroup });
    this.foodChainService.productDetailsData.subscribe((productDetails: any)=>{
      this.qualityCheckFormGroup.patchValue(productDetails);
      this.qualityCheckFormGroup.updateValueAndValidity();
    })
  }

  onNext(): void {
    this.moveStep.emit('forward');
  }
  onPrevious(): void {
    this.moveStep.emit('back');
  }
}
