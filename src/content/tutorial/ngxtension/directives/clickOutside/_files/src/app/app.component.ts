import {Component, signal} from '@angular/core';
import { ClickOutside } from 'ngxtension/click-outside';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickOutside],
  template: `
    <div id="inside" (clickOutside)="$clicks.set($clicks() + 1)">clicks outside {{$clicks()}}</div>
  `,
  styles: `
    #inside {
        border: 1px solid red;
    }
  `
})
export class AppComponent {
  $clicks = signal(0);
}
