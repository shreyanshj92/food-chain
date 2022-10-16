import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { EventTypes } from 'src/app/shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() isEditable: boolean = true;
  @Output() shareFormData = new EventEmitter();
  isLoading: boolean = false;
  isSummeryAvailable: boolean = false;
  summeryForm!: FormGroup;
  productDetailSubscription!: Subscription;
  eventTypes = EventTypes;

  constructor(
    private foodChainService: FoodChainService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.summeryForm = this.fb.group({
      batchId: [{ value: '', disabled: this.isEditable }],
      eventType: [{ value: '', disabled: this.isEditable }],
      formerDetails: this.fb.group({
        username: [{ value: '', disabled: this.isEditable }],
        phone: [{ value: '', disabled: this.isEditable }],
        email: [{ value: '', disabled: this.isEditable }],
        address: [{ value: '', disabled: this.isEditable }],
      }),
      dispatchDate: [{ value: '', disabled: this.isEditable }],
      supplierDetails: this.fb.group({
        username: [{ value: '', disabled: this.isEditable }],
        phone: [{ value: '', disabled: this.isEditable }],
        email: [{ value: '', disabled: this.isEditable }],
        address: [{ value: '', disabled: this.isEditable }],
      }),
      eventDateTime: [{ value: '', disabled: this.isEditable }],
      fleetDetails: this.fb.group({
        fleetId: [{ value: '', disabled: this.isEditable }],
        fromLocation: [{ value: '', disabled: this.isEditable }],
        toLocation: [{ value: '', disabled: this.isEditable }],
        driverName: [{ value: '', disabled: this.isEditable }],
        driverContactNumber: [{ value: '', disabled: this.isEditable }],
        journeyStartDate: [{ value: '', disabled: this.isEditable }],
      }),
    });
  }

  onEdit(): void {
    this.isEditable = true;
  }

  onCaptureProductDetails(event: any): void {
    this.isLoading = true;

    this.productDetailSubscription = this.foodChainService
      .getProductDetailsByBatchID(event)
      .subscribe(
        (response: any) => {
          if (response) {
            this.isSummeryAvailable = true;
            this.summeryForm.patchValue(response);
            this.summeryForm.updateValueAndValidity();
            this.isLoading = false;
          }
          console.log('summery:', response);
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }

  onSubmit(): void {
    this.shareFormData.emit(this.summeryForm.value);
  }

  ngOnDestroy(): void {
    this.productDetailSubscription?.unsubscribe();
  }
}
