import { AuthenticationService } from './shared/authentication.service';
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

  get isUser() {
    return this.authService.hasRole(Role.User);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
