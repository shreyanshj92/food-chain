import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.scss'],
})
export class QrCodeReaderComponent implements OnInit {
  isReadyToScaneCode: boolean = false;
  qrResultString: string = '';
  @Output() onCaptureBatchCode = new EventEmitter();

  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
  ];

  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: any;
  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  clearResult(): void {
    this.qrResultString = '';
  }

  onDirectSearch(): void {
    this.onCaptureBatchCode.emit(this.searchTerm);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  onCapturingQRCode(): void {
    this.onCaptureBatchCode.emit(this.qrResultString);
  }
}
