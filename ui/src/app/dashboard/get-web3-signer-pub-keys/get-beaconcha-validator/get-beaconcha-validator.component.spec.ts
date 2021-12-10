import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBeaconchaValidatorComponent } from './get-beaconcha-validator.component';

describe('GetBeaconchaValidatorComponent', () => {
  let component: GetBeaconchaValidatorComponent;
  let fixture: ComponentFixture<GetBeaconchaValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBeaconchaValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBeaconchaValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
