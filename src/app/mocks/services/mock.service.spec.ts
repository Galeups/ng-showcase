import { TestBed } from '@angular/core/testing';

import { MockBackendService } from './mock-backend.service';

describe('MockService', () => {
  let service: MockBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
