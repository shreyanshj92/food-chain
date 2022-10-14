import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  validationMessage = '';

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

    this.authenticationService.user.subscribe((userDetails: any) => {
      if (userDetails) {
        if (userDetails?.role === 'Admin') {
          this.router.navigate(['/admin']);
        } else if (userDetails?.role === 'User') {
          this.router.navigate(['/user']);
        }
        this.validationMessage = '';
      } else {
        this.validationMessage = 'Enter Valid credentials';
      }
    });
    this.loading = false;
  }
}
