import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CleanedComponent } from './cleaned/cleaned.component';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { MatStepper } from '@angular/material/stepper';
import { ProcessedComponent } from './processed/processed.component';
import { QualityCheckComponent } from './quality-check/quality-check.component';
import { ReceivedComponent } from './received/received.component';

@Component({
  selector: 'app-process-flow',
  templateUrl: './process-flow.component.html',
  styleUrls: ['./process-flow.component.scss'],
})
export class ProcessFlowComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  receivedFormGroup!: FormGroup;
  qualityCheckFormGroup!: FormGroup;

  cleanedFormGroup!: FormGroup;

  processedFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private foodChainService: FoodChainService) {}

  ngOnInit(): void {
    this.foodChainService.productDetailsData.subscribe((productDetails: any)=>{
      switch(productDetails.eventType){
        case "Received": setTimeout(
          () =>
            (this.stepper.selectedIndex = 0),
          0
        );
          break;
          case "QualityCheck": setTimeout(
            () =>
              (this.stepper.selectedIndex = 1),
            0
          );
          break;
          case "Cleaned": setTimeout(
            () =>
              (this.stepper.selectedIndex = 2),
            0
          );
          break;
          case "Processed": setTimeout(
            () =>
              (this.stepper.selectedIndex = 3),
            0
          );
          break;
          default: break;
      }
    })
  }

  checkFormGroup(event: any): void {
    switch (event.step) {
      case 1:
        this.receivedFormGroup = event.form;
        break;
      case 2:
        this.qualityCheckFormGroup = event.form;
        break;
      case 3:
        this.cleanedFormGroup = event.form;
        break;
      case 4:
        this.processedFormGroup = event.form;
        break;
      default:
        break;
    }
  }

  moveStep(step: any): void {
    console.log(this.stepper.selectedIndex, step);
    setTimeout(
      () =>
        (this.stepper.selectedIndex =
          step === 'back'
            ? this.stepper.selectedIndex - 1
            : this.stepper.selectedIndex + 1),
      0
    );
  }

  
}
