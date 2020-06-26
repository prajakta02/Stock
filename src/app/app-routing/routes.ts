import { DisplayStocksCardComponent } from './../display-stocks-card/display-stocks-card.component';
import { Routes } from '@angular/router';
import { TransactionpageComponent } from '../transactionpage/transactionpage.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'home', component: DisplayStocksCardComponent },
    {path: 'transactions', component: TransactionpageComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];
