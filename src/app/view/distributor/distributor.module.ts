import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributorCollectionFormComponent } from './distributor-collection-form/distributor-collection-form.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'materialCollection',
    component: DistributorCollectionFormComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    DashboardComponent,
    DistributorCollectionFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DistributorModule { }
