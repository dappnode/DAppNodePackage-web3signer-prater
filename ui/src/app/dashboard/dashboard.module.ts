import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetWeb3signerStatusComponent } from './get-web3signer-status/get-web3signer-status.component';
import { GetWeb3SignerPubKeysComponent } from './get-web3-signer-pub-keys/get-web3-signer-pub-keys.component';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SpinnerModule } from '../common/spinner/spinner.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GetWeb3signerStatusComponent,
    GetWeb3SignerPubKeysComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, MatDividerModule, MatListModule, MatCardModule],
})
export class DashboardModule {}
