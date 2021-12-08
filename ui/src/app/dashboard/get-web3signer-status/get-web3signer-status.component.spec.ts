import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeb3signerStatusComponent } from './get-web3signer-status.component';

describe('GetWeb3signerStatusComponent', () => {
  let component: GetWeb3signerStatusComponent;
  let fixture: ComponentFixture<GetWeb3signerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWeb3signerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWeb3signerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
