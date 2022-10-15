import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-process-flow',
  templateUrl: './process-flow.component.html',
  styleUrls: ['./process-flow.component.scss']
})
export class ProcessFlowComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  @Input() productDetail!:any;

  receivedFormGroup!: FormGroup;
  qualityCheckFormGroup!: FormGroup;
  cleanedFormGroup!: FormGroup;
  processedFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    switch(this.productDetail?.eventType){
      case "Received": this.stepper.selectedIndex = 0;
      break; 
      case "QualityCheck": this.stepper.selectedIndex = 1;
      break; 
      case "Cleaned": this.stepper.selectedIndex = 2;
      break; 
      case "Processed": this.stepper.selectedIndex = 3;
      break; 
      default : this.stepper.selectedIndex = 4;
      break; 
    }
    
  }

}
