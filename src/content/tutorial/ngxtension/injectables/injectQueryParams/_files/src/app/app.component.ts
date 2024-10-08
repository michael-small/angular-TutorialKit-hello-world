import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <ul>
      <li><a [routerLink]="['/queryParamsAccount', 1]" [queryParams]="{account: 1}">Queryparams Account 1</a></li>
      <li><a [routerLink]="['/queryParamsAccount', 2]" [queryParams]="{account: 2}">Queryparams Account 2</a></li>
      <li><a [routerLink]="['/queryParamsAccount', 3]" [queryParams]="{account: 3}">Queryparams Account 3</a></li>
    </ul>

    <router-outlet />
  `,
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigateByUrl('/')
  }
}
