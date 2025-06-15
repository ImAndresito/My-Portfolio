import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IntroductionComponent,
    HeaderComponent,
    ButtonsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My-Portfolio';
}
