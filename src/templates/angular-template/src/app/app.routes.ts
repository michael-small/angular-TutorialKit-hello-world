import { Routes } from '@angular/router';
import { AccountDetailComponent as AccountDetailComponentA } from './components/injectors/inject-params/account-detail.component';
import { AccountDetailComponent as AccountDetailComponentB } from './components/injectors/inject-query-params/account-detail/account-detail.component';

export const routes: Routes = [
  { path: 'paramsAccount/:id', component: AccountDetailComponentA },
  { path: 'queryParamsAccount/:id', component: AccountDetailComponentB },
];
