import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  DoCheck,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  SimpleChanges,
} from '@angular/core';
import { SignerRequestsService } from 'src/app/common/services/signer-requests.service';
import { GetBeaconchaValidatorComponent } from './get-beaconcha-validator/get-beaconcha-validator.component';

@Component({
  selector: 'app-get-web3-signer-pub-keys',
  templateUrl: './get-web3-signer-pub-keys.component.html',
  styleUrls: ['./get-web3-signer-pub-keys.component.scss'],
})
export class GetWeb3SignerPubKeysComponent implements OnInit, DoCheck {
  publicKeys: string[] = [];

  @ViewChild('validatorsPerformance', { read: ViewContainerRef, static: true })
  public validatorsPerformance!: ViewContainerRef;

  constructor(
    private signerStatusService: SignerRequestsService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.signerStatusService.getSignerPublicKeys().subscribe((response) => {
      this.publicKeys = response;
    });
  }

  ngDoCheck(): void {
    console.log(this.publicKeys);
    //this.validatorsPerformance.clear();
    const component = this.resolver
      .resolveComponentFactory(GetBeaconchaValidatorComponent)
      .create(this.validatorsPerformance.injector);
    component.instance.publicKeys = this.publicKeys;
    console.log(component);
  }
}
