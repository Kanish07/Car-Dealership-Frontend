import { TestBed } from '@angular/core/testing';

import { SellCarService } from './sell-car.service';

describe('SellCarService', () => {
  let service: SellCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
