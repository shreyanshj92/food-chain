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
  isLoading = false;

  @Input() productDetail!: any;
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private foodChainService: FoodChainService
  ) {}

  ngOnInit(): void {
    this.qualityCheckFormGroup = this.fb.group({
      batchId: [''],
      runId: [''],
      eventType: [{ value: '', disabled: 'true' }],
      eventDateTime: [''],
      originalQuantity: [''],
      quantity: [''],
    });
    this.checkFormGroup.emit({ step: 1, form: this.qualityCheckFormGroup });
    this.foodChainService.processFlowData.subscribe(
      (productDetails: any) => {
        this.qualityCheckFormGroup.patchValue(productDetails);
        this.qualityCheckFormGroup.updateValueAndValidity();
      }
    );
  }

  onNext(): void {
    
    const data = {...this.qualityCheckFormGroup.value, ...{eventType:"QualityCheck"}};
    this.qualityCheckFormGroup.updateValueAndValidity();

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
