import { TestBed } from '@angular/core/testing';

import { FoodChainService } from './food-chain.service';

describe('FoodChainService', () => {
  let service: FoodChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
