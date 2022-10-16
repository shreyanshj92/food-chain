import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CleanedComponent } from './cleaned/cleaned.component';
import { MatStepper } from '@angular/material/stepper';
import { ProcessedComponent } from './processed/processed.component';
import { QualityCheckComponent } from './quality-check/quality-check.component';
import { ReceivedComponent } from './received/received.component';

@Component({
  selector: 'app-process-flow',
  templateUrl: './process-flow.component.html',
  styleUrls: ['./process-flow.component.scss']
})
export class ProcessFlowComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  @Input() productDetail!:any;
  
  step1Complete:boolean = false;
  step2Complete:boolean= false;
  step3Complete:boolean= false;
  step4Complete:boolean= false;
  @ViewChild('ReceivedComponent') receivedComponent: ReceivedComponent = new ReceivedComponent(new FormBuilder);
  @ViewChild('QualityCheckComponent') qualityCheckComponent : QualityCheckComponent=new QualityCheckComponent(new FormBuilder);
  @ViewChild('CleanedComponent') cleanedComponent: CleanedComponent=new CleanedComponent(new FormBuilder);
  @ViewChild('ProcessedComponent') processedComponent: ProcessedComponent=new ProcessedComponent(new FormBuilder);

  

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // switch(this.productDetail?.eventType){
    //   case "Received": this.stepper.selectedIndex = 0;
    //   break; 
    //   case "QualityCheck": this.stepper.selectedIndex = 1;
    //   this.step1Complete = true;
    //   break; 
    //   case "Cleaned": this.stepper.selectedIndex = 2;
    //   this.step1Complete = true;
    //   this.step2Complete = true;
    //   break; 
    //   case "Processed": this.stepper.selectedIndex = 3;
    //   this.step1Complete = true;
    //   this.step2Complete = true;
    //   this.step3Complete = true;
    //   break; 
    //   default : this.stepper.selectedIndex = 4;
    //   this.step1Complete = true;
    //   this.step2Complete = true;
    //   this.step3Complete = true;
    //   this.step4Complete = true;

    //   break; 
    // }
    
  }

  get receivedFormGroup() {
    return this.receivedComponent.receivedFormGroup;
  }

  get qualityCheckFormGroup() {
    return this.qualityCheckComponent ? this.qualityCheckComponent.qualityCheckFormGroup : null;
  }

  get cleanedFormGroup() {
    return this.cleanedComponent ? this.cleanedComponent.cleanedFormGroup : null;
  }

    get processedFormGroup() {
      return this.processedComponent ? this.processedComponent.processedFormGroup : null;
    }

}
