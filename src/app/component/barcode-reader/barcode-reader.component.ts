import { Component } from '@angular/core';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.scss'],
})
export class BarcodeReaderComponent {
  scanResult: string;

  onScanSuccess(resultString: string) {
    this.scanResult = resultString;
    console.log('Barcode Scanned:', resultString);
  }
}
