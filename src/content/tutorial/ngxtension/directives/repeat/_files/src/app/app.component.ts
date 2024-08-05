import {Component, signal} from '@angular/core';
import { Repeat } from 'ngxtension/repeat';
import {NgFor} from "@angular/common";
import {RepeatPipe} from "ngxtension/repeat-pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Repeat, NgFor, RepeatPipe],
  template: `
    <ul>
      <li *ngFor="let i; repeat: 3">{{ i }}</li>
    </ul>
    <ul>
      @for (i of 3 | repeat: 10; track i) {
        <li>{{ i }}</li>
      }
    </ul>
   `
})
export class AppComponent {
}
