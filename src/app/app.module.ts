import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FingerprintComponent } from './component/fingerprint/fingerprint.component';
import { FaceDetectionComponent } from './component/face-detection/face-detection.component';
import { QrCodeReaderComponent } from './component/qr-code-reader/qr-code-reader.component';
import { BarcodeReaderComponent } from './component/barcode-reader/barcode-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    FingerprintComponent,
    FaceDetectionComponent,
    QrCodeReaderComponent,
    BarcodeReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
