import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Role } from './models/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
userDetail!:any;
 user: any = new BehaviorSubject({});
    isAuthorized() {
        return !!this.userDetail;
    }
    hasRole(role: Role) {
        return this.isAuthorized() && this.userDetail.role === role;
    }
    login(userName:string,password:string) {
      // Call API to get JWT Token
      const adminjwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6IkFkbWluIn0.PFPNmg9TbnGr3CEML42Zq-qmJ8GA0QUGl1UIgNqQIYU";
      const userjwt ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoiVXNlciJ9.EtnPIRs8psxKtwSqM4X0HupKioeWJgwv8FVFXAiF2mI";
      if(userName==="admin" && password==="admin"){
        this.userDetail = this.parseJwt(adminjwt)
      } else if(userName==="user" && password==="user"){
        this.userDetail = this.parseJwt(userjwt)
      }else{
        this.userDetail = null;
      }
     
      this.user.next(this.userDetail);
    }
    logout() {
      this.userDetail = null;
      this.user.next(null);
    }

    parseJwt (token: any) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
  };
}
