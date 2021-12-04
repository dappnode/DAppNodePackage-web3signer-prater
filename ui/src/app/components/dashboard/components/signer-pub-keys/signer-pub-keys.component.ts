import { Component, OnInit } from '@angular/core';
import { SignerRequestsService } from 'src/app/services/signer-requests.service';

@Component({
  selector: 'app-signer-pub-keys',
  templateUrl: './signer-pub-keys.component.html',
  styleUrls: ['./signer-pub-keys.component.scss'],
})
export class SignerPubKeysComponent implements OnInit {
  publicKeys: string[] = [];

  constructor(private signerStatusService: SignerRequestsService) {}

  ngOnInit(): void {
    this.signerStatusService.getSignerPublicKeys().subscribe((response) => {
      console.log(response);
      this.publicKeys = JSON.stringify(response).split(',');
    });
  }
}
