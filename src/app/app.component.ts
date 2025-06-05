import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My-Portfolio';
}
