import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <ul>
      <li><a [routerLink]="['/account', 1]">Account 1</a></li>
      <li><a [routerLink]="['/account', 2]">Account 2</a></li>
      <li><a [routerLink]="['/account', 3]">Account 3</a></li>
    </ul>

    <router-outlet />
  `,
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.navigateByUrl('')
      }
}
