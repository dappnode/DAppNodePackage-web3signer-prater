import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeb3SignerPubKeysComponent } from './get-web3-signer-pub-keys.component';

describe('GetWeb3SignerPubKeysComponent', () => {
  let component: GetWeb3SignerPubKeysComponent;
  let fixture: ComponentFixture<GetWeb3SignerPubKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWeb3SignerPubKeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWeb3SignerPubKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
