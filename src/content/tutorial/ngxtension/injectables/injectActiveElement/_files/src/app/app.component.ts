import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {JsonPipe} from "@angular/common";
import { injectActiveElement } from "ngxtension/active-element";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, JsonPipe],
  template: `
    <button>btn1</button>
    <button>btn2</button>
    <button>btn3</button>
    
    <pre>{{$activeElement()?.innerHTML}}</pre>
  `,
})
export class AppComponent {
  $activeElement = toSignal(injectActiveElement());

  constructor(private router: Router) {
    this.router.navigateByUrl('/');
  }
}
