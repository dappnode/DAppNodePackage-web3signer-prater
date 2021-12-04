import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SignerRequestsService } from 'src/app/services/signer-requests.service';

@Component({
  selector: 'app-signer-status',
  templateUrl: './signer-status.component.html',
  styleUrls: ['./signer-status.component.scss'],
})
export class SignerStatusComponent implements OnInit {
  private loading: boolean = false;
  signerStatus: boolean = false;

  constructor(private signerStatusService: SignerRequestsService) {}

  ngOnInit(): void {
    this.signerStatusService.getSignerStatus().subscribe((status) => {
      this.signerStatus = status === 'OK';
    });
  }
}
