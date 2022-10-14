import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';
import { MaterialModule } from './mterial.module';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { QrCodeReaderComponent } from './components/qr-code-reader/qr-code-reader.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [  
    QrCodeGeneratorComponent, QrCodeReaderComponent, FormGeneratorComponent
  ],
  imports: [
  
  CommonModule,
    QRCodeModule,
    ZXingScannerModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [],
  exports:[QrCodeGeneratorComponent, QrCodeReaderComponent, MaterialModule]
})
export class SharedModule { }
