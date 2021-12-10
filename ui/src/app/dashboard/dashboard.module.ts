import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetWeb3signerStatusComponent } from './get-web3signer-status/get-web3signer-status.component';
import { GetWeb3SignerPubKeysComponent } from './get-web3-signer-pub-keys/get-web3-signer-pub-keys.component';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { GetBeaconchaValidatorComponent } from './get-web3-signer-pub-keys/get-beaconcha-validator/get-beaconcha-validator.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GetWeb3signerStatusComponent,
    GetWeb3SignerPubKeysComponent,
    DashboardComponent,
    StepperComponent,
    GetBeaconchaValidatorComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
