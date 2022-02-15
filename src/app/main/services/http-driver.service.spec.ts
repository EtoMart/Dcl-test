import { TestBed } from '@angular/core/testing';

import { HttpDriverService } from './http-driver.service';

describe('HttpDriverService', () => {
  let service: HttpDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
