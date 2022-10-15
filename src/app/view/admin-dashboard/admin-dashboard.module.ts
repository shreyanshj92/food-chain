import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ScannerComponent } from './scanner/scanner.component';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {path: 'scanner', component: ScannerComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
];

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminDashboardModule { }
