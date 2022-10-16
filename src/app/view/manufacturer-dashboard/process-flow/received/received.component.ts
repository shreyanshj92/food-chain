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
  isLoading = false;

  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private foodChainService: FoodChainService
  ) {}

  ngOnInit(): void {
    this.receivedFormGroup = this.fb.group({
      batchId: [''],
      runId: [''],
      eventType: [{ value: '', disabled: 'true' }],
      eventDateTime: [''],
      originalQuantity: [''],
      quantity: [''],
    });
    this.checkFormGroup.emit({ step: 0, form: this.receivedFormGroup });
    this.foodChainService.productDetailsData.subscribe(
      (productDetails: any) => {
        this.receivedFormGroup.patchValue(productDetails);
        this.receivedFormGroup.updateValueAndValidity();
      }
    );
  }

  onNext(): void {
    const data = {...this.receivedFormGroup.value, ...{eventType:"Received"}};
    
    this.receivedFormGroup.updateValueAndValidity();
    
    this.isLoading = true;
    this.foodChainService
      .saveFoodProcess(data)
      .subscribe(
        (response: any) => {
          this.foodChainService.processFlowData.next(response);
          this.moveStep.emit('forward');
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
}
