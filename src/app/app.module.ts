import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule, MatCardModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display/display.component';
import { TransactionpageComponent } from './transactionpage/transactionpage.component';

import 'hammerjs';

import { CompanyStockService } from './services/company-stock.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisplayComponent,
    TransactionpageComponent
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

  ],
  providers: [
     CompanyStockService,
     TransactionService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
