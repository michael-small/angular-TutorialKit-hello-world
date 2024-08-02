import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <ul>
      <li><a [routerLink]="['/paramsAccount', 1]">Params Account 1</a></li>
      <li><a [routerLink]="['/paramsAccount', 2]">Params Account 2</a></li>
      <li><a [routerLink]="['/paramsAccount', 3]">Params Account 3</a></li>
    </ul>

    <ul>
      <li>
        <a
          [routerLink]="['/queryParamsAccount', 1]"
          [queryParams]="{ account: 1 }"
          >Queryparams Account 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="['/queryParamsAccount', 2]"
          [queryParams]="{ account: 2 }"
          >Queryparams Account 2</a
        >
      </li>
      <li>
        <a
          [routerLink]="['/queryParamsAccount', 3]"
          [queryParams]="{ account: 3 }"
          >Queryparams Account 3</a
        >
      </li>
    </ul>

    <router-outlet />
  `,
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigateByUrl('');
  }
}
