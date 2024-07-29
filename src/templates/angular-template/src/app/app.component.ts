import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeStyledComponent } from './code-styled.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CodeStyledComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-template';
}
