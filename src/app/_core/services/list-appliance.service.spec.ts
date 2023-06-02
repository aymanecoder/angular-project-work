import { TestBed } from '@angular/core/testing';

import { ListApplianceService } from './list-appliance.service';

describe('ListApplianceService', () => {
  let service: ListApplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListApplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
