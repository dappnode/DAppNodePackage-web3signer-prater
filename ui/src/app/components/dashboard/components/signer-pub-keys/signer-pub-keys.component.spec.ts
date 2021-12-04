import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerPubKeysComponent } from './signer-pub-keys.component';

describe('SignerPubKeysComponent', () => {
  let component: SignerPubKeysComponent;
  let fixture: ComponentFixture<SignerPubKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerPubKeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignerPubKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
