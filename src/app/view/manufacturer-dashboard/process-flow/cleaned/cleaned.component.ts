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
  isLoading = false;

  @Input() productDetail!: any;
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private foodChainService: FoodChainService
  ) {}

  ngOnInit(): void {
    this.cleanedFormGroup = this.fb.group({
      batchId: [''],
      runId: [''],
      eventType: [{ value: '', disabled: 'true' }],
      eventDateTime: [''],
      originalQuantity: [''],
      quantity: [''],
    });
    this.checkFormGroup.emit({ step: 2, form: this.cleanedFormGroup });
    this.foodChainService.processFlowData.subscribe(
      (productDetails: any) => {
        this.cleanedFormGroup.patchValue(productDetails);
        this.cleanedFormGroup.updateValueAndValidity();
      }
    );
  }

  onNext(): void {
    
    const data = {...this.cleanedFormGroup.value, ...{eventType:"Cleaned"}};
    this.cleanedFormGroup.updateValueAndValidity();

    this.isLoading = true;
    this.foodChainService
      .saveFoodProcess(data)
      .subscribe(
        (response: any) => {
          this.foodChainService.processFlowData.next(response);
          this.isLoading = false;
          this.moveStep.emit('forward');
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
  onPrevious(): void {
    this.moveStep.emit('back');
  }
}
