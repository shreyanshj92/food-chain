import { Component, OnInit } from '@angular/core';

import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { UserDetails } from './../../../shared/interfaces/user-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  retailerList: UserDetails[]|undefined;
  isretailerSelected: boolean = false;
  selectedRetailer: UserDetails = {} as UserDetails

  constructor(private foodService: FoodChainService) { }

  ngOnInit(): void {
    this.foodService.getRetailerList().subscribe(data =>{
      this.retailerList =  data;
    },(err: any) => {
      alert('cant fetch Retailers list');
      console.log(err);
    })
  }

  retailerSelected(retailer: UserDetails) {
    if(retailer) {
      this.selectedRetailer = retailer;
      this.isretailerSelected = true;
    }
  }


}
