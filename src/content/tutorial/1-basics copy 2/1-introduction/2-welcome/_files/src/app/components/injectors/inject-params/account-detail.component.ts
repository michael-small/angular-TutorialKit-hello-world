import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { injectParams } from 'ngxtension/inject-params';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <pre>params(): {{ params() | json }}</pre>
    <pre>id(): {{ id() | json }}</pre>
    <pre>paramKeys(): {{ paramKeys() | json }}</pre>
  `,
})
export class AccountDetailComponent {
  params = injectParams();
  id = injectParams('id');
  paramKeys = injectParams((params) => Object.keys(params));
}
