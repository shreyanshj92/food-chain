import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';
import { KeyValuePipe } from './pipes/key-value.pipe';
import { MaterialModule } from './mterial.module';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { QrCodeReaderComponent } from './components/qr-code-reader/qr-code-reader.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    QrCodeGeneratorComponent,
    QrCodeReaderComponent,
    FormGeneratorComponent,
    SharedTableComponent,
    KeyValuePipe
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    ZXingScannerModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    QrCodeGeneratorComponent,
    QrCodeReaderComponent,
    MaterialModule,
    SharedTableComponent,
    FormGeneratorComponent
  ],
})
export class SharedModule {}
