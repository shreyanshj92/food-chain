import { Component, OnInit } from '@angular/core';

import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { UserDetails } from './../../../shared/interfaces/user-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
