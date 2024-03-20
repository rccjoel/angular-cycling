import { TestBed } from '@angular/core/testing';

import { CyclingServiceService } from './cycling-service.service';

describe('CyclingServiceService', () => {
  let service: CyclingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
