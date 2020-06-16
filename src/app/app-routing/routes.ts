import { DisplayComponent } from './../display/display.component';
import { Routes } from '@angular/router';
import { TransactionpageComponent } from '../transactionpage/transactionpage.component';

export const routes: Routes = [
    {path: 'home', component: DisplayComponent },
    {path: 'transactions', component: TransactionpageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
