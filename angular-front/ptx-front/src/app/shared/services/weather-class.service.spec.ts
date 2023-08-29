import { TestBed } from '@angular/core/testing';

import { WeatherClassService } from './weather-class.service';

describe('WeatherClassService', () => {
  let service: WeatherClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
