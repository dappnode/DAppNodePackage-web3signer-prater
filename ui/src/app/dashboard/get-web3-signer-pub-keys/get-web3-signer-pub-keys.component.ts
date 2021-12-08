import { Component, OnInit } from '@angular/core';
import { SignerRequestsService } from 'src/app/common/services/signer-requests.service';

@Component({
  selector: 'app-get-web3-signer-pub-keys',
  templateUrl: './get-web3-signer-pub-keys.component.html',
  styleUrls: ['./get-web3-signer-pub-keys.component.scss'],
})
export class GetWeb3SignerPubKeysComponent implements OnInit {
  publicKeys: string[] = [];

  constructor(private signerStatusService: SignerRequestsService) {}

  ngOnInit(): void {
    this.signerStatusService.getSignerPublicKeys().subscribe((response) => {
      this.publicKeys = response;
    });
  }
}
