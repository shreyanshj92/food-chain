import { AuthenticationService } from './shared/services/authentication.service';
import { Component } from '@angular/core';
import { Role } from './shared/models/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Food Processing Chain';

  constructor(private router: Router, private authService: AuthenticationService) { }
  get isAuthorized() {
    return this.authService.isAuthorized();
  }
  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isFarmer() {
    return this.authService.hasRole(Role.Farmer);
  }

  get isRetailer(){
    return this.authService.hasRole(Role.Retailer);
  }

  get isSupplier(){
    return this.authService.hasRole(Role.Supplier);
  }

  get isManufacturer(){
    return this.authService.hasRole(Role.Manufacturer);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
