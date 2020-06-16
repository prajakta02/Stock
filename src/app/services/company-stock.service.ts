import { Injectable } from '@angular/core';

import { CompanyStock } from '../shared/company-stock';
import { companyStocks } from './../shared/company-stocks';

@Injectable({
  providedIn: 'root'
})
export class CompanyStockService {

  getStocks(): CompanyStock[] {
    return companyStocks;
  }
  constructor() { }
}
