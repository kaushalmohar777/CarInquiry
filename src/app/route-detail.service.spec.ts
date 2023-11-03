import { TestBed } from '@angular/core/testing';

import { RouteDetailService } from './route-detail.service';

describe('RouteDetailService', () => {
  let service: RouteDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
