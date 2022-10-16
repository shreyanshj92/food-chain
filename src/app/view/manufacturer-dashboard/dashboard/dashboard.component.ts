import { Component, OnInit } from '@angular/core';

import { EventDetails } from 'src/app/shared/interfaces/event-details';
import { FoodChainService } from 'src/app/shared/services/food-chain.service';
import { KEY_VALUE_PROCESS_LIST } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  batchListData: EventDetails[] = [];
  keyValuePairs = KEY_VALUE_PROCESS_LIST;
  displayedColumns: string[] = [
    'eventId',
    'eventType',
    'referenceId',
    'batchId',
    'packageID',
    'eventDatetime',
  ];
  isProductDetailScannerEnabled = false;
  isProcessFlowEnabled = false;
  isProcessListEnabled = false;
  isScannedQR=false
  isSelectedRecord=false

  productDetailsData!:any

  constructor(private foodChainService: FoodChainService) {}

  ngOnInit(): void {}

  onSubmit(formData: any): void {
    console.log(formData);
  }

  onChangeSelection(type: string): void {
    this.isProductDetailScannerEnabled = false;
    this.isProcessFlowEnabled = false;
    this.isProcessListEnabled = false;
    if (type === 'scan') {
      this.isProductDetailScannerEnabled = true;
    } else {
      this.isProcessListEnabled = true;
      this.getProcessList();
    }
  }

  getProcessList(): void {
    this.foodChainService
      .getBatchIdList()
      .subscribe((batchList: EventDetails[]) => {
        this.batchListData = batchList;
      });
  }

  onCaptureProductDetails(batchId:any):void{
    this.isScannedQR = true;
    this.getProductDetails(batchId);
  }

  onSelectedRecord(selectedRecord: any): void {
    this.isSelectedRecord = true;
    this.getProductDetails(selectedRecord?.batchId);
  }

  getProductDetails(batchId: any): void {
    this.foodChainService.getProductDetailsByBatchID(batchId).subscribe((productDetails:any)=>{
      this.foodChainService.productDetailsData.next(productDetails)
      
    })
  }

  onBack(): void {
    this.isScannedQR = false;
    this.isSelectedRecord = false;
  }


}
