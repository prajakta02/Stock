import { TransactionService } from './../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../shared/transaction';
import {NgxPaginationModule} from 'ngx-pagination';



@Component({
  selector: 'app-transactionpage',
  templateUrl: './transactionpage.component.html',
  styleUrls: ['./transactionpage.component.scss']
})
export class TransactionpageComponent implements OnInit {

  p:number=1;
  isMobile = false;

  constructor(private transactionService: TransactionService) { }

  transactions: Transaction[];
  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
    this.transactions = this.transactions.reverse();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobile = true;
   }
  }

}
