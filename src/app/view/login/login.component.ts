import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, take } from 'rxjs';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Role } from 'src/app/shared/models/roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  isGuestUser = false;
  validationMessage = '';
  authSubscription!: Subscription;
  authSubscriptionGuest!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isGuestUser = false;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.login(
      this.f['username'].value,
      this.f['password'].value
    );

    this.authSubscription = this.authenticationService.user
      .pipe(take(1))
      .subscribe((userDetails: any) => {
        if (userDetails) {
          if (!!userDetails?.role) {
            const navigationPath = userDetails?.role?.toLowerCase();
            this.router.navigate([`/${navigationPath}`]);
          }
          this.validationMessage = '';
        } else {
          this.validationMessage = 'Enter Valid credentials';
        }
      });
    this.loading = false;
  }

  onGuestLogin(): void {
    this.isGuestUser = true;
    this.authenticationService.login(
      "Guest",
      "test"
    );

    this.authSubscriptionGuest = this.authenticationService.user
      .pipe(take(1))
      .subscribe((userDetails: any) => {
        if (userDetails) {
          if (userDetails?.role === Role.Guest) {
            this.router.navigate(['/scanner']);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.authSubscriptionGuest.unsubscribe();
  }
}
