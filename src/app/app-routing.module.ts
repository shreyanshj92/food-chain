import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { Role } from './shared/models/roles';

const routes: Routes = [
  {
    path: 'scanner',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Guest] },
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
    data: { roles: [Role.Admin] },
  },
  {
    path: 'farmer',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/farmer/farmer.module').then((m) => m.FarmerModule),
    data: { roles: [Role.Farmer] },
  },

  {
    path: 'manufacturer',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/manufacturer-dashboard/manufacturer-dashboard.module').then((m) => m.ManufacturerDashboardModule),
    data: { roles: [Role.Manufacturer] },
  },
  {
    path: 'supplier',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/supplier-dashboard/supplier-dashboard.module').then((m) => m.SupplierDashboardModule),
    data: { roles: [Role.Supplier] },
  },
  {
    path: 'retailer',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/retailer/retailer.module').then((m) => m.RetailerModule),
    data: { roles: [Role.Retailer] },
  },
  {
    path: 'distributor',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./view/distributor/distributor.module').then((m) => m.DistributorModule),
    data: { roles: [Role.Distributor] },
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
