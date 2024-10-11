import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FingerprintComponent } from './component/fingerprint/fingerprint.component';
import { FaceDetectionComponent } from './component/face-detection/face-detection.component';
import { QrCodeReaderComponent } from './component/qr-code-reader/qr-code-reader.component';
import { BarcodeReaderComponent } from './component/barcode-reader/barcode-reader.component';

const routes: Routes = [
  { path: 'fingerprint', component: FingerprintComponent },
  { path: 'face-detection', component: FaceDetectionComponent },
  { path: 'qr-code-reader', component: QrCodeReaderComponent },
  { path: 'barcode-reader', component: BarcodeReaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
