import { Component } from '@angular/core';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent {
  authenticate() {
    // Assuming you have WebAuthn support in the browser
    if (navigator.credentials && navigator.credentials.create) {
      const publicKey: PublicKeyCredentialCreationOptions = {
        challenge: new Uint8Array(32), // Replace with actual challenge data from your server
        rp: {
          name: 'My PWA App',
        },
        user: {
          id: new Uint8Array(16), // Replace with the actual user ID bytes
          name: 'testuser@example.com',
          displayName: 'Test User',
        },
        pubKeyCredParams: [
          { alg: -7, type: 'public-key' }, // Correct "type" to string literal "public-key"
          { alg: -257, type: 'public-key' }, // Add another algorithm if needed (RS256 for example)
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform', // Optional: for platform authenticators like fingerprint sensors
        },
        timeout: 60000, // Optional: 60 seconds timeout for user action
        attestation: 'direct', // Optional: "none" | "indirect" | "direct"
      };

      navigator.credentials
        .create({ publicKey })
        .then((credential) => {
          console.log('Authentication Success', credential);
          // Handle successful fingerprint authentication
        })
        .catch((err) => {
          console.error('Authentication Failed', err);
        });
    } else {
      alert('Your browser does not support WebAuthn.');
    }
  }
}
