import { TestBed } from '@angular/core/testing';

import { SignerStatusService } from './signer-status.service';

describe('SignerStatusService', () => {
  let service: SignerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
