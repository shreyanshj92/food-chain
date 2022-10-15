import { Component, OnInit } from '@angular/core';

import { Address } from './../../../shared/interfaces/user-details';
import { FARMER_KEY_VALUE } from 'src/app/shared/constants/constant';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { UserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  farmersList: UserDetails[]|undefined;
  displayColumns = [
    "username",
    "firstname",
    "lastname",
    "phone",
    "email",
    "fullAddress"
  ]
  keyValuePairsData: any[] = [];

  keyValuePairs = FARMER_KEY_VALUE
  
  
  constructor(private foodService: FoodChainService) { }

  ngOnInit(): void {
    this.foodService.getFarmerList().subscribe(data => {
      this.farmersList = data;
      this.keyValuePairsData = data.map((farmer:any) => {
        farmer["fullAddress"] = `${farmer.address.street},${farmer.address.city},${farmer.address.district}`
        return farmer;
      })
      //this.createTablePairs();
    },err => {
      alert('cant fetch farmer list');
      console.log(err);
    })
  }

  createTablePairs() {
    this.farmersList?.forEach(far => {
      const obj = {
        user_name: far.username,
        first_name: far.firstName,
        last_name: far.lastName,
        phone: far.phone,
        email: far.email,
        address: `${far.address.street},${far.address.city},${far.address.district}`
      }
      this.keyValuePairsData?.push(obj);
    });
    console.log(this.keyValuePairsData)
  }

  getFarmerDetails(farmDetails:UserDetails) {
    if(farmDetails) {
    }
  }

}
