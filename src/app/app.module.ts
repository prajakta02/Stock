import { AuthGuard } from './app-routing/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule, MatCardModule, MatListModule, MatDialogModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';                  


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionpageComponent } from './transactionpage/transactionpage.component';

import 'hammerjs';

import { CompanyStockService } from './services/company-stock.service';
import { TransactionService } from './services/transaction.service';
import { DisplayStocksCardComponent } from './display-stocks-card/display-stocks-card.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransactionpageComponent,
    DisplayStocksCardComponent,
    StockCardComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatDialogModule,
    NgxPaginationModule
  ], 
  entryComponents: [AlertDialogComponent],
  providers: [
     CompanyStockService,
     TransactionService,
     AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
