import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { MaterialCollectionForm } from '../interfaces/material-collection-form';

@Injectable({
  providedIn: 'root'
})
export class FoodChainService {
  
  token: string = "";
  httpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })

  constructor(private http: HttpClient, private auth: AuthenticationService) {
    if(this.auth.isAuthorized()) {
      this.token = this.auth.getUserToken();
    }
   }

  saveMaterialFormDetails(materialFormDetails: MaterialCollectionForm): Observable<any> {
    if(this.auth.isAuthorized()) {
      const url = "http://localhost:8080/save/materialInfo";
      return this.http.post(url, materialFormDetails, {headers: this.httpHeaders});
    } else {
      return of('Not Authenticated');
    }
  }
}
