import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FoodChainService } from './../../services/food-chain.service';

@Component({
  selector: 'app-form-reference',
  templateUrl: './form-reference.component.html',
  styleUrls: ['./form-reference.component.scss']
})
export class FormReferenceComponent implements OnInit {

  form: FormGroup = this.fb.group({
    text: [""],
    textArea: [""],
    number: [""],
    radio: [""],
    dropDown: [""],
    date: [""]
  }); 

  constructor(private fb: FormBuilder, private foodService: FoodChainService) { }

  ngOnInit(): void {
    this.foodService.getBatchIdList().subscribe(data=>{
      console.log('getBatchListAPI');
      console.log(data);
    }, err => {
      console.log(err)
    });
    this.foodService.getFarmerList().subscribe(data => {
      console.log('getFarmerslist');
      console.log(data);
    }, err => {
      console.log(err)
    });
    this.foodService.getFoodProcess('483e10f2-b417-44be-b93d-ef1b8cfeba13').subscribe(data => {
      console.log('getFoodProcess');
      console.log(data);
    }, err => {
      console.log(err)
    });
  }

}
