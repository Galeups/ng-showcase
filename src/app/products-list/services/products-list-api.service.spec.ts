import { TestBed } from '@angular/core/testing';

import { ProductsListApiService } from './products-list-api.service';

describe('ProductsListApiService', () => {
  let service: ProductsListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
