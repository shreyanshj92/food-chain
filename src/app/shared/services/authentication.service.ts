import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LOGIN_CREDENTIALS } from '../constants/constant';
import { Role } from '../models/roles';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userDetail!: any;
  token!: string;
  user: any = new BehaviorSubject({});
  credentials = LOGIN_CREDENTIALS;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthorized() {
    return !!this.userDetail;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.userDetail?.role === role;
  }

  login(userName: string, password: string) {
    // Call API to get JWT Token
    const url =
      'https://foodtrackerrcmmveuapi-foodtrackerrcmmv.azuremicroservices.io/authenticate';
    const data = {
      username: userName,
      password: password,
    };
    // this.http.post(url, data).subscribe((jwtResponse: any) => {
    //   this.token = jwtResponse.token;
    //   this.userDetail = this.parseJwt(jwtResponse.token);
    //   this.user.next(this.userDetail);
    //   return this.userDetail;
    // });

    // TODO: Hardcoded credentials
    this.userDetail = this.credentials.filter(
      (cred) => cred.userName === userName
    )[0];
    this.user.next(this.userDetail);
    return this.userDetail;
  }

  logout() {
    this.userDetail = null;
    this.user.next(null);
  }

  getUserToken(): string {
    return this.token;
  }

  parseJwt(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}
