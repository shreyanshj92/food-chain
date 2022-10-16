import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';
import { Role } from './shared/models/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Food Tracker App';
  userDetails!: any;
  isSannerVisible:boolean=false

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((userResponse: any) => {
      this.userDetails = userResponse;
    })
  }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }
  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isFarmer() {
    return this.authService.hasRole(Role.Farmer);
  }

  get isRetailer() {
    return this.authService.hasRole(Role.Retailer);
  }

  get isSupplier() {
    return this.authService.hasRole(Role.Supplier);
  }

  get isManufacturer() {
    return this.authService.hasRole(Role.Manufacturer);
  }

  get isGuest() {
    return this.authService.hasRole(Role.Guest);
  }

  get isDistributor() {
    return this.authService.hasRole(Role.Distributor);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
