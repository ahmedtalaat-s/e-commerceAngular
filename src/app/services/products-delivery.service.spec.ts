import { TestBed } from '@angular/core/testing';

import { ProductsDeliveryService } from './products-delivery.service';

describe('ProductsDeliveryService', () => {
  let service: ProductsDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
