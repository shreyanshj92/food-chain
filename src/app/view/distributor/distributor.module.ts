import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributorCollectionFormComponent } from './distributor-collection-form/distributor-collection-form.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DistributorCollectionFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DistributorModule { }
