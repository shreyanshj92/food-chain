import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ProcessFlowComponent } from './process-flow/process-flow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, ProcessFlowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ManufacturerDashboardModule {}
