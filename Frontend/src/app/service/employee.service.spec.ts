import { TestBed } from '@angular/core/testing';

import { EmployeeserviceService  } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});