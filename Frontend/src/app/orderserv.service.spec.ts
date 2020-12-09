import { TestBed } from '@angular/core/testing';

import { OrderservService } from './orderserv.service';

describe('OrderservService', () => {
  let service: OrderservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
