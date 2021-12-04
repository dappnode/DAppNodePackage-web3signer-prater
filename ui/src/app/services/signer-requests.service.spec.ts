import { TestBed } from '@angular/core/testing';

import { SignerRequestsService } from './signer-requests.service';

describe('SignerRequestsService', () => {
  let service: SignerRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignerRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
