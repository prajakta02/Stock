import { TestBed } from '@angular/core/testing';

import { CompanyStockService } from './company-stock.service';

describe('CompanyStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyStockService = TestBed.get(CompanyStockService);
    expect(service).toBeTruthy();
  });
});
