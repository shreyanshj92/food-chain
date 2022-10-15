import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FarmerComponent } from './farmer/farmer.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'overview',
    component: FarmerComponent,
  },
  { path: '', redirectTo: 'overview', pathMatch: "full" },
];
@NgModule({
  declarations: [FarmerComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes)],
})
export class FarmerModule {}
