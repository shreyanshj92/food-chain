import { Component, OnInit } from '@angular/core';

import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.scss']
})
export class QrCodeReaderComponent implements OnInit {
  isReadyToScaneCode: boolean = false;
  qrResultString: string = "";

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];

constructor(){}
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: any;

  ngOnInit(): void {}

   clearResult(): void {
    this.qrResultString = "";
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}