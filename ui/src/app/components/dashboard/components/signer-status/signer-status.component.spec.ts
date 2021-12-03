import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerStatusComponent } from './signer-status.component';

describe('SignerStatusComponent', () => {
  let component: SignerStatusComponent;
  let fixture: ComponentFixture<SignerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
