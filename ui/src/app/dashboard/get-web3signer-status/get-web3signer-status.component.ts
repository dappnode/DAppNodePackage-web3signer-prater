import { Component, OnInit } from '@angular/core';
import { SignerRequestsService } from 'src/app/common/services/signer-requests.service';

@Component({
  selector: 'app-get-web3signer-status',
  templateUrl: './get-web3signer-status.component.html',
  styleUrls: ['./get-web3signer-status.component.scss'],
})
export class GetWeb3signerStatusComponent implements OnInit {
  signerStatus: boolean = false;

  constructor(private signerStatusService: SignerRequestsService) {}

  getSignerStatus() {
    this.signerStatusService.getSignerStatus().subscribe((status) => {
      if (status === 'OK') {
        this.signerStatus = true;
      } else {
        this.signerStatus = false;
      }
    });
  }

  ngOnInit(): void {
    this.getSignerStatus();
  }
}
