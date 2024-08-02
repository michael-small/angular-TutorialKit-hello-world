import { Routes } from '@angular/router';
import { AccountDetailComponent as AccountDetailComponentB } from './components/injectors/inject-query-params/account-detail/account-detail.component';

export const routes: Routes = [
  { path: 'queryParamsAccount/:id', component: AccountDetailComponentB },
];
