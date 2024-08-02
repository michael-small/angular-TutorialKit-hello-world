import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { injectQueryParams } from 'ngxtension/inject-query-params';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [JsonPipe],
  template: ` 
    <pre>queryParams(): {{ queryParams() | json }}</pre> 
    <pre>queryParamsKeys(): {{ queryParamsKeys() | json }}</pre> 
    <pre>accountParam(): {{ accountParam() | json }}</pre> 
  `,
})
export class AccountDetailComponent {
  queryParams = injectQueryParams();
  queryParamsKeys = injectQueryParams((params) => Object.keys(params)); // returns a signal with all keys of the query params
  accountParam = injectQueryParams('account'); // returns a signal with the value of the account query param
}
