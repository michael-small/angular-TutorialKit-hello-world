import { Routes } from '@angular/router';
import { AccountDetailComponent as AccountDetailComponentA } from './components/injectors/inject-params/account-detail.component';
import { AccountDetailComponent as AccountDetailComponentB } from './components/injectors/inject-query-params/account-detail/account-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: 'paramsAccount/:id', component: AccountDetailComponentA },
  { path: 'queryParamsAccount/:id', component: AccountDetailComponentB },
  { path: '**', component: NotFoundComponent },
];
