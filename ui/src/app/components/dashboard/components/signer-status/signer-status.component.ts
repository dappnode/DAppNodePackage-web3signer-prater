import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SignerStatusService } from 'src/app/services/signer-status.service';

@Component({
  selector: 'app-signer-status',
  templateUrl: './signer-status.component.html',
  styleUrls: ['./signer-status.component.scss'],
})
export class SignerStatusComponent implements OnInit {
  private loading: boolean = false;
  signerStatus: boolean = false;

  constructor(private signerStatusService: SignerStatusService) {}

  ngOnInit(): void {
    this.signerStatusService.getSignerStatus().subscribe((status) => {
      console.log(status);
      //const parsed = JSON.stringify(status);
      this.signerStatus = status === 'OK';
    });
  }
}
