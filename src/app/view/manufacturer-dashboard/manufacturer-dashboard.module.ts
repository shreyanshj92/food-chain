import { RouterModule, Routes } from '@angular/router';

import { CleanedComponent } from './process-flow/cleaned/cleaned.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ProcessFlowComponent } from './process-flow/process-flow.component';
import { ProcessedComponent } from './process-flow/processed/processed.component';
import { QualityCheckComponent } from './process-flow/quality-check/quality-check.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceivedComponent } from './process-flow/received/received.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
];

@NgModule({
  declarations: [DashboardComponent, ProcessFlowComponent, ReceivedComponent, QualityCheckComponent, CleanedComponent, ProcessedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ManufacturerDashboardModule {}
