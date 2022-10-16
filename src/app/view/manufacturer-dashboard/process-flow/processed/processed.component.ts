import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EventTypes } from 'src/app/shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { FoodProcess } from './../../../../shared/interfaces/food-process';

@Component({
  selector: 'app-processed',
  templateUrl: './processed.component.html',
  styleUrls: ['./processed.component.scss'],
})
export class ProcessedComponent implements OnInit {
  processedFormGroup!: FormGroup;
  eventTypes = EventTypes;
  isLoading = false;

  @Input() productDetail!: any;
  @Output() moveStep = new EventEmitter();
  @Output() checkFormGroup = new EventEmitter();
  @Output() generatedProductId = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private foodChainService: FoodChainService
  ) {}

  ngOnInit(): void {
    this.processedFormGroup = this.fb.group({
      batchId: [''],
      runId: [''],
      eventType: [{ value: '', disabled: 'true' }],
      eventDateTime: [''],
      originalQuantity: [''],
      quantity: [''],
      totalPackages: [''],
      numberOfItemsPerPackage: [''],
    });
    this.checkFormGroup.emit({ step: 3, form: this.processedFormGroup });
    this.foodChainService.processFlowData.subscribe(
      (productDetails: any) => {
        this.processedFormGroup.patchValue(productDetails);
        this.processedFormGroup.updateValueAndValidity();
      }
    );
  }

  onNext(): void {
    this.processedFormGroup.updateValueAndValidity();
    const data = {
      quantity: this.processedFormGroup.controls['quantity'].value,
      batchId: this.processedFormGroup.controls['batchId'].value,
      runId: this.processedFormGroup.controls['runId'].value,
      packageItems: [
        {
          totalPackages:
            this.processedFormGroup.controls['totalPackages'].value,
          numberOfItemsPerPackage:
            this.processedFormGroup.controls['numberOfItemsPerPackage'].value,
        },
      ],
    };

    const changeStatusData: FoodProcess = {
      quantity: this.processedFormGroup.controls['quantity'].value,
      batchId: this.processedFormGroup.controls['batchId'].value,
      runId: this.processedFormGroup.controls['runId'].value,
      eventType: 'Processed',
      eventDateTime: this.processedFormGroup.controls['eventDateTime'].value,
      originalQuantity:
        this.processedFormGroup.controls['originalQuantity'].value,
    };

    this.isLoading = true;
    this.foodChainService.saveFoodProcess(changeStatusData).subscribe(
      (response: any) => {
        this.foodChainService.saveProductDetails(data).subscribe((response: any)=>{
          this.foodChainService.processFlowData.next(response);
          this.isLoading = false;
          this.moveStep.emit('forward');
          this.generatedProductId.emit(response?.productId)
        })
        
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
