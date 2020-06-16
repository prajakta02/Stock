import { Transaction } from './../shared/transaction';
import { Injectable } from '@angular/core';
import { transactions } from './../shared/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  getTransactions(): Transaction[] {
    return transactions;
  }

  constructor() { }
}
