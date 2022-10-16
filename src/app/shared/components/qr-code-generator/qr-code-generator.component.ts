import { Component, Input, OnInit } from '@angular/core';

import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss']
})
export class QrCodeGeneratorComponent implements OnInit {
  @Input() myAngularxQrCode: string = "";
  qrCodeDownloadLink: SafeUrl = "";
  isQrCodeGenerated: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
