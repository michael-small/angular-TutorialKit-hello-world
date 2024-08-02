import { Routes } from '@angular/router';
import { AccountDetailComponent } from './components/injectors/inject-params/account-detail.component';

export const routes: Routes = [
  { path: 'account/:id', component: AccountDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
