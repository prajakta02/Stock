import { Transaction } from './../shared/transaction';
import { CompanyStock } from './../shared/company-stock';
import { transactions } from './../shared/transactions';

import { CompanyStockService } from './../services/company-stock.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  companyStocks: CompanyStock[];

  balanceAmount = 10000;


  buyStock(value, stock) {
      if (this.balanceAmount > 0 ) {
        if ((this.balanceAmount - value * stock.stockPrice) < 0 ) {
          alert('You have insufficient balance!');
        } else {
          this.balanceAmount -= (stock.stockPrice * value);
          transactions.push(new Transaction(stock.name, value, 'buy'));
          stock.currentStock += Number(value);
        }
      } else {
        alert('You have insufficient balance!');
      }
  }

  sellStock(value, stock) {
    if (stock.currentStock > 0) {
        if (stock.currentStock - value < 0) {
          alert('You dont have enough stocks to sell!');
        } else {
          this.balanceAmount += (stock.stockPrice * value);
          transactions.push(new Transaction(stock.name, value, 'sell'));
          stock.currentStock -= Number(value);
        }

    } else {
      alert('You dont have enough stocks to sell!');
    }
}

  constructor(private companyStockService: CompanyStockService) { }
  ngOnInit() {
    this.companyStocks = this.companyStockService.getStocks();
  }
}
