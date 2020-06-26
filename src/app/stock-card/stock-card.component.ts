import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material';
import { transactions } from './../shared/transactions';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CompanyStock } from '../shared/company-stock';
import { Transaction } from '../shared/transaction';


@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock: CompanyStock;
  @Input()
  balanceAmount;
  @Output()
  balanceUpdate: EventEmitter<number> = new EventEmitter<number>();

  openAlertDialog(errorMessage) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: errorMessage,
        buttonText: {
          cancel: 'OK'
        }
      },
    });
  }

  buyStock(noOfStocks, stock) {
    window.localStorage.setItem('loggedIn', 'true');
    if (noOfStocks < 0 || noOfStocks === '') {
      this.openAlertDialog("No of stocks cannot be negative or empty!");
    } else {
      if (this.balanceAmount > 0) {
        if ((this.balanceAmount - noOfStocks * stock.stockPrice) < 0) {
          this.openAlertDialog('You have insufficient balance!');
        } else {
          this.balanceAmount -= (stock.stockPrice * noOfStocks);
          transactions.push(new Transaction(stock.name, noOfStocks, 'buy'));
          stock.currentStock += Number(noOfStocks);
          this.balanceUpdate.emit(this.balanceAmount);
        }
      } else {
        this.openAlertDialog('You have insufficient balance!');
      }
    }
  }

  sellStock(noOfStocks, stock) {
    window.localStorage.setItem('loggedIn', 'true');
    if (noOfStocks < 0 || noOfStocks === '') {
      this.openAlertDialog("No of stocks cannot be negative or empty!");
    } else {
      if (stock.currentStock > 0) {
        if (stock.currentStock - noOfStocks < 0) {
          this.openAlertDialog('You dont have enough stocks to sell!');
        } else {
          this.balanceAmount += (stock.stockPrice * noOfStocks);
          transactions.push(new Transaction(stock.name, noOfStocks, 'sell'));
          stock.currentStock -= Number(noOfStocks);
          this.balanceUpdate.emit(this.balanceAmount);
        }

      } else {
        this.openAlertDialog('You dont have enough stocks to sell!');
      }
    }
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.balanceAmount);
  }


}
