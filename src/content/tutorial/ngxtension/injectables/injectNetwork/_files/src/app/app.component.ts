import {Component, effect} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { injectNetwork } from 'ngxtension/inject-network';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, JsonPipe],
  template: `
      <pre>type {{ network.type() }}</pre>
      <pre>downlink {{ network.downlink()}}</pre>
      <pre>downlinkMax {{ network.downlinkMax()}}</pre>
      <pre>effectiveType {{ network.effectiveType()}}</pre>
      <pre>rtt {{ network.rtt()}}</pre>
      <pre>saveData {{ network.saveData()}}</pre>
      <pre>online {{ network.online()}}</pre>
      <pre>offlineAt {{ network.offlineAt()}}</pre>
      <pre>onlineAt {{ network.onlineAt()}}</pre>
      <pre>supported {{ network.supported()}}</pre>
  `,
})
export class AppComponent {
  network = injectNetwork();

  constructor(private router: Router) {
    this.router.navigateByUrl('/');
  }


}
