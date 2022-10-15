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
  @Input() isEditable: boolean = false;
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
    this.searchTerm = '483e10f2-b417-44be-b93d-ef1b8cfeba13';
    this.onCaptureBatchCode.emit(this.searchTerm);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.onCaptureBatchCode.emit(this.qrResultString);
  }
}
