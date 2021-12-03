import { TestBed } from '@angular/core/testing';

import { SignerPublicKeysService } from './signer-public-keys.service';

describe('SignerPublicKeysService', () => {
  let service: SignerPublicKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignerPublicKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
