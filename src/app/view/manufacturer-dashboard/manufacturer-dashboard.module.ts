import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ProcessFlowComponent } from './process-flow/process-flow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { ReceivedComponent } from './process-flow/received/received.component';
import { QualityCheckComponent } from './process-flow/quality-check/quality-check.component';
import { CleanedComponent } from './process-flow/cleaned/cleaned.component';
import { ProcessedComponent } from './process-flow/processed/processed.component';

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
})
export class ManufacturerDashboardModule {}
