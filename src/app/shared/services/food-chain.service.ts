import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';
import { DistributerCollectionForm } from '../interfaces/distributer-collection-form';
import { EventDetails } from '../interfaces/event-details';
import { FoodProcess } from '../interfaces/food-process';
import { Injectable } from '@angular/core';
import { MaterialCollectionForm } from '../interfaces/material-collection-form';
import { ProductDetails } from './../interfaces/product-details';
import { ProductSummary } from './../interfaces/product-summary';
import { UserDetails } from '../interfaces/user-details';

@Injectable({
  providedIn: 'root',
})
export class FoodChainService {


  baseURL = "https://foodtrackerrcmmveuapi-foodtrackerrcmmv.azuremicroservices.io";

  productDetailsData = new BehaviorSubject({});

  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  // POST API to save the material collection form details, used by supplier.
  saveMaterialFormDetails(
    materialFormDetails: MaterialCollectionForm
  ): Observable<any> {
    const url = `${this.baseURL}/save/materialInfo`;
    return this.http.post<any>(url, materialFormDetails);
  }

  // GET API to fetch the list of All Retailers
  getRetailerList(): Observable<UserDetails[]> {
    const url = `${this.baseURL}/getRetailerList`;
    return this.http.get<UserDetails[]>(url);
  }

  // GET API to fetch the list of All Farmers
  getFarmerList(): Observable<UserDetails[]> {
    const url = `${this.baseURL}/getFarmerList`;
    return this.http.get<UserDetails[]>(url);
  }

  //GET API to fetch the list of all Events along with their batchIds
  getBatchIdList():Observable<EventDetails[]> {
    const url = `${this.baseURL}/getBatchList`;
    return this.http.get<EventDetails[]>(url);
  }

  //GET API to add Batch ID generated by barcode, used by barcode scanner
  getProductDetailsByBatchID(batchId: any): Observable<ProductSummary> {
    const url = `${this.baseURL}/getProductDetails/${batchId}`;
    return this.http.get<ProductSummary>(url);
  }

  // GET API to get user's details based on user ID and user ROLE
  getUserDetailBy_ID_ROLE(userId: number, role: string): Observable<ProductSummary> {
    const url = `${this.baseURL}/getUserDetail/${userId}/${role}`;
    return this.http.get<ProductSummary>(url);
  }

  //POST API to save the Distributer collection form details
  saveDistributerCollectionFormDetails(distributerFormDetails: DistributerCollectionForm): Observable<any> {
    const url = `${this.baseURL}/save/distributorCollection`;
    return this.http.post<any>(url, distributerFormDetails);
  }

  //GET API to get the food process event details from the batchID
  getFoodProcess(batchId: string): Observable<FoodProcess> {
    const url = `${this.baseURL}/process/foodprocess/${batchId}`;
    return this.http.get<FoodProcess>(url);
  }

  //POST API to save the food process details
  saveFoodProcess(foodProcessObj: FoodProcess): Observable<FoodProcess> {
    const url = `${this.baseURL}/process/foodprocess/update`;
    return this.http.post<FoodProcess>(url,foodProcessObj);
  }

  //POST API to save the product details
  saveProductDetails(productDetails: ProductDetails): Observable<FoodProcess> {
    const url = `${this.baseURL}/process/productdetail/update`;
    return this.http.post<FoodProcess>(url, productDetails);
  }


}
