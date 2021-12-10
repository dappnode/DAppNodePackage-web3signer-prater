import { TestBed } from '@angular/core/testing';

import { BeaconchaRequestsService } from './beaconcha-requests.service';

describe('BeaconchaRequestsService', () => {
  let service: BeaconchaRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaconchaRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
