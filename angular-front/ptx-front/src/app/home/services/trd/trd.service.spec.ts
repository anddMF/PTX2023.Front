import { TestBed } from '@angular/core/testing';

import { TrdService } from './trd.service';

describe('TrdService', () => {
  let service: TrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
