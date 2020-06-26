import { Transaction } from './../shared/transaction';
import { CompanyStock } from './../shared/company-stock';
import { transactions } from './../shared/transactions';

import { CompanyStockService } from './../services/company-stock.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-display-stocks-card',
  templateUrl: './display-stocks-card.component.html',
  styleUrls: ['./display-stocks-card.component.scss']
})
export class DisplayStocksCardComponent implements OnInit {

  companyStocks: CompanyStock[];
  isMobile = false;
  balanceAmount = 10000;

  getUpdatedBalance(event) {
    console.log(event);
    this.balanceAmount = event;
}

  constructor(private companyStockService: CompanyStockService) { }
  ngOnInit() {
    this.companyStocks = this.companyStockService.getStocks();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobile = true;
   }
  }


}
