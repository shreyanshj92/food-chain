import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Role } from '../models/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userDetail!: any;
  token!:string;
  user: any = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  isAuthorized() {
    return !!this.userDetail;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.userDetail.role === role;
  }

  login(userName: string, password: string) {
    // Call API to get JWT Token
    const url =
      'https://foodtrackerrcmmveuapi-foodtrackerrcmmv.azuremicroservices.io/authenticate';
    const data = {
      username: userName,
      password: password,
    };
    this.http.post(url, data).subscribe((jwtResponse: any) => {
      this.token = jwtResponse;
      this.userDetail = this.parseJwt(jwtResponse.token);
      console.log(this.userDetail);
      this.user.next(this.userDetail);
      return this.userDetail;
    });
  }

  logout() {
    this.userDetail = null;
    this.user.next(null);
  }

  getUserToken(): string{
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
