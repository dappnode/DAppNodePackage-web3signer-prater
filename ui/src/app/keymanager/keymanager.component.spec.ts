import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeymanagerComponent } from './keymanager.component';

describe('KeymanagerComponent', () => {
  let component: KeymanagerComponent;
  let fixture: ComponentFixture<KeymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
