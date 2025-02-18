import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.scss'],
})
export class QrCodeReaderComponent {
  scanResult: string;

  onScanSuccess(resultString: string) {
    this.scanResult = resultString;
    console.log('QR Code Scanned:', resultString);
  }
}
