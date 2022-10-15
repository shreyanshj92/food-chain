import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialCollectionComponent } from './material-collection/material-collection.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'materialCollection',
    component: MaterialCollectionComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    MaterialCollectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MaterialCollectionComponent
  ]
})
export class SupplierDashboardModule { }
