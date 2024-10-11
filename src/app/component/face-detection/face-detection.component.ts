import { Component, ElementRef, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.scss'],
})
export class FaceDetectionComponent {
  @ViewChild('videoElement', { static: true })
  videoElement: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.startFaceRecognition();
  }

  async startFaceRecognition() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models');

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.videoElement.nativeElement.srcObject = stream;
    });

    this.videoElement.nativeElement.addEventListener('play', async () => {
      const detections = await faceapi.detectAllFaces(
        this.videoElement.nativeElement
      );
      console.log('Faces Detected:', detections);
      // Handle detected faces, e.g., capturing the face
    });
  }
}
