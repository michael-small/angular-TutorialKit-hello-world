import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: ` <p>not-found works!</p> `,
  styles: ``,
})
export class NotFoundComponent {
  constructor(private router: Router) {
    console.log(router.url);
  }
}
